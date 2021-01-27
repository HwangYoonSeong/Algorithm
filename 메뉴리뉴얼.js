const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
        const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}

function solution (orders, course) {
    var answer = [];
    var cByo = [];

    course.forEach((j) => {
        var temp = [];
        orders.forEach((i) => {
            temp.push(getCombinations(i.split(''), j).map((el) => el.sort().join('')));
        })
        cByo.push(temp);

    })
    console.log(cByo);
    var clist = [];
    for (var i = 0; i < cByo.length; i++) {

        var temp = [];

        for (var j = 0; j < cByo[i].length; j++) {
            for (var k = 0; k < cByo[i][j].length; k++) {

                temp.push(cByo[i][j][k]);
            }
        }
        clist.push(temp)
    }

    console.log(clist);
    var cSet = [];
    clist.forEach((el) => {
        cSet.push(Array.from(new Set(el)));
    })
    console.log(cSet);

    var cCount = [];
    for (var i = 0; i < cSet.length; i++) {
        var temp = [];
        for (var k = 0; k < cSet[i].length; k++) {
            var count = 0;

            for (var j = 0; j < clist.length; j++) {
                for (var l = 0; l < clist[j].length; l++) {

                    if (cSet[i][k] === clist[j][l]) count++;
                }
            }
            temp.push(count);
        }

        cCount.push(temp);
    }

    console.log(cCount);




    for (var i = 0; i < cCount.length; i++) {
        var max = Math.max.apply(null, cCount[i]);
        if (max < 2) continue;
        //console.log(max);
        let pos = 0;
        while (true) {
            let foundPos = cCount[i].indexOf(max, pos);
            if (foundPos == -1) break;
            answer.push(cSet[i][foundPos])
            //console.log(foundPos);
            pos = foundPos + 1;
        }
    }

    answer.sort();

    return answer;
}

console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));



// const example = ['A', 'B', 'C', 'D'];
// //const result = getCombinations(example, 2);
// console.log(example.join(''));
  // => [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]