function solution (m, v) {
    var answer = 1;

    var rest = [];
    rest.push(m - v[0]);
    var start = 0;
    for (var i = 1; i < v.length; i++) {

        var j = start; // 남은 칸이 0이 될 경우 그 윗층 부터 탐색 
        while (j < rest.length) {
            if (v[i] <= rest[j]) {
                rest[j] = rest[j] - v[i];
                if (rest[j] === 0) start = j + 1;

                break;
            }
            j++;
        }
        if (j === rest.length) {
            answer++;
            if (m - v[i] === 0) start = j;
            rest.push(m - v[i]);

        }

    }
    //console.log(rest);
    return answer;
}

console.log(solution(4, [4, 4, 2, 4]));