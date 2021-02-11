function solution (n) {
    var ans = 1;
    while (n !== 1) {
        if (n % 2 === 1) ans++;
        n = Math.floor(n / 2);
    }

    return ans;
}

console.log(solution(5000))
