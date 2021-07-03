function solution (n, lost, reserve) {
    var answer = 0;
    const arr = Array(n).fill(1);
    lost.forEach(el => {
        arr[el - 1]--;
    })
    reserve.forEach(el => {
        arr[el - 1]++;
    })

    arr.forEach((el, i) => {
        if (el == 0) {
            if (i == 0) {//맨 앞
                if (arr[i + 1] == 2) {
                    arr[i + 1]--;
                    arr[i]++;
                }
            }
            else if (i == arr.length - 1) {
                if (arr[i - 1] == 2) {
                    arr[i - 1]--;
                    arr[i]++;
                }
            }
            else {
                if (arr[i + 1] == 2) {
                    arr[i + 1]--;
                    arr[i]++;
                } else if (arr[i - 1] == 2) {
                    arr[i - 1]--;
                    arr[i]++;

                }
            }
        }
    })


    return answer = arr.filter(el => el != 0).length;
}

console.log(solution(5, [2, 4], [3]));