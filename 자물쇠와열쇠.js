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

function downMove (key) {

    key.unshift(new Array(key.length).fill(0));
    key.pop()

    return key;
}

function leftMove (key) {
    for (var i = 0; i < key.length; i++) {
        key[i].pop();
        key[i].unshift(0);
    }

    return key;
}

function check (key, lock) {
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

            for (var i = 0; i < lock.length; i++) {
                for (var j = 0; j < lock.length; j++) {
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
    answer = check(key, lock)
    if (!answer) {
        for (var k = 0; k < 4; k++) {//270도 회전 
            var orgKey = JSON.parse(JSON.stringify(key));//deep copy

            for (var i = 0; i < key.length - 1; i++) {
                var orgKey2 = JSON.parse(JSON.stringify(key));//deep copy
                for (var j = 0; j < key.length - 1; j++) {

                    key = leftMove(key);
                    answer = check(key, lock)
                    if (answer) break;

                }
                if (answer) break;
                key = downMove(orgKey2);
            }
            if (answer) break;
            key = rotate(orgKey);
        }
    }



    return answer;
}

console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]))
