function solution (numbers) {
    var answer = 0;
    var list = [];
    var idx;
    for (var i = 0; i < numbers.length; i++) {
        idx = [];
        list.push(numbers[i]);
        idx.push(i);
        permu(numbers[i], idx, numbers.length);
    }

    function permu (n, idx, numlen) {
        if (idx.length === numlen) return;
        for (var j = 0; j < numlen; j++) {

            var dup = false;
            for (var k = 0; k < idx.length; k++) {
                if (j === idx[k]) dup = true;
            }
            if (dup) continue;//중복되는 idx의 경우 해당 i는 continue
            list.push(n.concat(numbers[j]));
            idx.push(j);
            permu(n.concat(numbers[j]), idx, numlen);
            idx.pop();

        }

    }

    console.log(list);

    list.forEach((el, idx) => {
        list[idx] = parseInt(el);
    })
    list = Array.from(new Set(list));
    var isPrime;
    list.forEach((el, idx) => {
        isPrime = true;

        for (var l = 2; l <= Math.sqrt(el); l++) {
            if (el % l == 0) {
                isPrime = false;
                break;
            }
        }
        if (el === 1 || el === 0) {
            isPrime = false;
        }

        if (isPrime) {
            answer++;
        }
    })


    return answer;
}


//순열((1,2)!==(2,1))
const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)] // 해당하는 fixed를 제외한 나머지 리스트
        const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        const attached = permutations.map((el) => [fixed, ...el]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}


// 순열 표준화
function solution2 (numbers) {
    var answer = 0;
    var arr = numbers.split('').map(el => (el = el * 1));
    var permu = [];
    for (var i = 1; i <= numbers.length; i++) {
        permu = [...permu, ...getPermutations(arr, i)];

    }
    permu = Array.from(new Set(permu.map(el => {
        return parseInt(el.join(''));
    })))

    permu.forEach((el, idx) => {
        var isPrime = true;

        for (var l = 2; l <= Math.sqrt(el); l++) {
            if (el % l == 0) {
                isPrime = false;
                break;
            }
        }
        if (el === 1 || el === 0) {
            isPrime = false;
        }

        if (isPrime) {
            answer++;
        }
    })
    return answer;
}
console.log(solution2("011"));
