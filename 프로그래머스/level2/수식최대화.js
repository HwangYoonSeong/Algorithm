const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)] // 해당하는 fixed를 제외한 나머지 뒤
        const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        const attached = permutations.map((permutations) => [fixed, ...permutations]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}

function solution (expression) {
    var answer = 0;
    var numList = [];
    var temp = [];
    var opList = [];
    expression.split('').map((el, idx) => {
        if (!isNaN(el)) {
            temp.push(el);
            if (idx === expression.length - 1) {
                numList.push(Number(temp.join('')));
            }
        } else {
            numList.push(Number(temp.join('')));
            numList.push(el);
            temp = [];
            opList.push(el);
        }
    });

    //console.log(numList);
    //console.log(opList);
    opList = Array.from(new Set(opList));
    //console.log(opList);
    var opIdx = [];
    opList.map((el, idx) => {
        opIdx.push(idx);
    })
    //console.log(opIdx);
    var opOrder = getPermutations(opIdx, opIdx.length);

    //console.log(opOrder);

    var res = [];
    opOrder.forEach((el) => {
        var tempNumList = numList.slice();
        el.forEach((opidx) => {
            var i = 0;
            var breakPoint = tempNumList.length;
            while (i < breakPoint) {
                if (tempNumList[i] === opList[opidx]) {
                    switch (opList[opidx]) {
                        case '+':
                            tempNumList.splice(i - 1, 3, tempNumList[i - 1] + tempNumList[i + 1]);
                            breakPoint -= 2;
                            break;
                        case '-':
                            tempNumList.splice(i - 1, 3, tempNumList[i - 1] - tempNumList[i + 1]);
                            breakPoint -= 2;
                            break;
                        case '*':
                            tempNumList.splice(i - 1, 3, tempNumList[i - 1] * tempNumList[i + 1]);
                            breakPoint -= 2;
                            break;
                    }
                } else i++;

            }
        })
        res.push(tempNumList[0] < 0 ? -1 * tempNumList[0] : tempNumList[0]);
    })
    answer = Math.max.apply(null, res);
    //console.log(res);
    return answer;
}

console.log(solution("100-200*300-500+20"));

