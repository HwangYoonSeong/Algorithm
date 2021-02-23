function solution (n) {
    var answer = '';
    var su = '수';
    var bak = '박';

    for (var i = 0; i < n; i++) {
        if (i % 2 === 0) answer = answer.concat(su);
        else answer = answer.concat(bak);
    }

    return answer;
}

console.log(solution(4));