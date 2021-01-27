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
    var temp = [];
    orders.forEach((i) => {
        course.forEach((j) => {
            temp.push(getCombinations(i.split(''), j).map((el) => el.join('')));
        })

    })

    var clist = [];

    for (var i = 0; i < temp.length; i++) {
        for (var j = 0; j < temp[i].length; j++) {
            clist.push(temp[i][j]);
        }
    }

    console.log(clist);
    var cSet = Array.from(new Set(clist));
    console.log(cSet);

    var cCount = [];
    for (var i = 0; i < cSet.length; i++) {
        var count = 0;
        for (var j = 0; j < clist.length; j++) {
            if (cSet[i] === clist[j]) count++;
        }
        cCount.push(count);

    }

    console.log(cCount);

    for (var i = 0; i < cSet.length; i++) {
        if (cCount[i] >= 2) answer.push(cSet[i]);
    }


    return answer;
}

console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]));



// const example = ['A', 'B', 'C', 'D'];
// //const result = getCombinations(example, 2);
// console.log(example.join(''));
  // => [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]