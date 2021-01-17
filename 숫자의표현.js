function solution (n) {
    var answer = 0;

    var init = 1;
    var i = 1;
    var j = 1;


    while (init <= n) {
        if (i === n) answer++;
        i += (++j);
        if (i > n) {
            i = ++init;
            j = i;

        }
    }
    return answer;
}

console.log(solution(15));

