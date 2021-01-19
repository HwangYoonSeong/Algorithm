function solution (n) {
    var answer = 0;
    var a = 0;
    var b = 1;
    for (var i = 0; i < n; i++) {
        answer = (a + b) % 1234567;
        a = b;
        b = answer;
    }
    return answer;
}

for (var i = 0; i < 10; i++) {
    console.log(solution(i));
}
//console.log(solution(4));