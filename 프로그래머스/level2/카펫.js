function solution (brown, yellow) {
    var answer = [];
    var i = 1;
    var quotient = 2;//일단 i보다는 크게 초기화
    var divisor = [];
    while (i < quotient) {
        if (yellow % i === 0) {

            quotient = yellow / i;
            divisor.push(new Array(i, quotient));
        }
        i++;
    }

    console.log(divisor);
    var idx = 0;
    divisor.forEach((el, i) => {
        if (brown === (el[0] * 2 + (el[1] + 2) * 2)) {
            idx = i;
        }
    })

    return answer = new Array(divisor[idx][1] + 2, divisor[idx][0] + 2);
}

console.log(solution(8, 1));
