
function showMatrix (arr) {
    arr.forEach((el) => {
        var temp = [];
        el.forEach((i) => {
            temp.push(i);
        })
        console.log(temp.join(' '));
    })
}

function rotate (key) {
    var rotated = [];
    for (var i = 0; i < key.length; i++) {
        var temp = [];
        for (var j = key.length - 1; j > -1; j--) {
            temp.push(key[j][i]);
        }
        rotated.push(temp);

    }

    return rotated;
}

function check (key, lock, len) {
    var match = true;

    for (var k = 0; k <= lock.length - key.length; k++) {
        for (var l = 0; l <= lock.length - key.length; l++) {
            var match2 = true;
            var tempLock = JSON.parse(JSON.stringify(lock));//deep copy
            for (var i = 0; i < key.length; i++) {
                for (var j = 0; j < key.length; j++) {
                    tempLock[i + k][j + l] = key[i][j] + lock[i + k][j + l]

                }

            }
            // showMatrix(tempLock);
            // console.log();
            for (var i = key.length - 1; i < key.length - 1 + len; i++) {
                for (var j = key.length - 1; j < key.length - 1 + len; j++) {
                    if (tempLock[i][j] !== 1) {
                        match2 = false;
                        break;
                    }

                }
                if (!match2) break;

            }

            if (match2) break;//tempLock이 모두다 1일 경우

        }
        if (match2) break;//tempLock이 모두다 1일 경우
    }
    if (!match2) match = false;

    return match;
}

function solution (key, lock) {
    var answer = true;

    var expendedLock = Array.from(Array(lock.length + 2 * (key.length - 1)), () => Array(lock.length + 2 * (key.length - 1)).fill(0))


    for (var i = key.length - 1; i < key.length - 1 + lock.length; i++) {
        for (var j = key.length - 1; j < key.length - 1 + lock.length; j++) {

            expendedLock[i][j] = lock[i - (key.length - 1)][j - (key.length - 1)];
        }
    }



    //showMatrix(expendedLock);
    for (var k = 0; k < 4; k++) {//270도 회전 
        answer = check(key, expendedLock, lock.length)
        if (answer) break;
        key = rotate(key);

    }


    return answer;
}

console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]))

