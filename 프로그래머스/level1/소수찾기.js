function solution (n) {
    // 1부터 100까지 숫자들을 담은 배열은 만든다.
    const arr = Array.from({ length: n }, (_, i) => i + 1);

    // 첫번째 1은 소수가 아니기에 0으로 만들어준다.
    arr[0] = 0;

    // 3️⃣풀이같이 제곱근까지만 순회한다.
    for (let i = 2; i * i <= n; i++) {
        // 만약 숫자가 0이라면 이미 다른 수의 배수라는 뜻이기 때문에 확인해줄 필요가 없다. 따라서, 0이 아닌 숫자에 한해서만 체크를 한다.
        if (arr[i - 1]) {
            // 그 숫자의 배수들을 0으로 만들어준다. 이때 j의 시작은 i*i로 만들어준다.
            for (let j = i * i; j <= n; j += i) {
                arr[j - 1] = 0;
            }
        }
    }
    // 마지막으로 0이 아닌 숫자로 배열을 만들어서 길이를 확인한다.
    const count = arr.filter((v) => v).length;
    return count;
}

console.log(solution(10));