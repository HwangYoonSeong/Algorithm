function solution (n) {
    var answer = n;
    var half = Math.floor(n / 2);
    for (var i = 1; i <= half; i++) {
        if (n % i === 0) answer += i;
    }
    return answer;
}

console.log(solution(5));