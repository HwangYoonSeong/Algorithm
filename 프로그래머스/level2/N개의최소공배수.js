function solution (arr) {
    var answer = 0;
    var lcm = 1;
    while (true) {
        var check = true;

        for (var i = 0; i < arr.length; i++) {
            if (lcm % arr[i] !== 0) {
                check = false;
                break;
            }
        }

        if (check) {
            answer = lcm;
            break;
        }

        lcm++;
    }
    return answer;
}

console.log(solution([1, 2, 3]));