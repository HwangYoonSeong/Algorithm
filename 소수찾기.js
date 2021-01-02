
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
        if (idx.len === numlen) return;
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


    list.forEach((el, idx) => {
        list[idx] = parseInt(el);
    })
    list = Array.from(new Set(list));
    console.log(list);
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




console.log(solution("011"));
