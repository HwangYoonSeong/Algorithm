function solution (citations) {
    var answer = 0;
    var count = 0;
    citations.sort((a, b) => {
        return a - b;
    })
    //가장 많이 인용된 횟수부터 확인 
    for (var i = citations[citations.length - 1]; i >= 0; i--) {
        count = 0;
        for (var j = 0; j < citations.length; j++) {
            if (i <= citations[j]) count++;
        }
        if (count >= i) {
            answer = i;
            break;
        }
    }

    return answer;
}

console.log(solution([10, 2, 3, 9]));