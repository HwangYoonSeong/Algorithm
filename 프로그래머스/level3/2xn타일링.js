function solution (n) {
    var answer = 0;

    // dfs(1);
    // dfs(2);

    // function dfs (sum) {

    //     if (sum === n) {
    //         answer++;
    //         return;
    //     } else if (sum < n) {
    //         dfs(sum + 1);
    //         dfs(sum + 2);
    //     } else return; //sum>n
    // }

    var a = 0;
    var b = 1;
    for (var i = 0; i < n; i++) {
        answer = (a + b) % 1000000007;
        a = b;
        b = answer;
    }

    return answer;
}

console.log(solution(3));