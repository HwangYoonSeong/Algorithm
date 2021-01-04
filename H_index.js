function solution (citations) {
    var answer = 0;
    var hlist = [];
    var count = 0;
    var flag = false;
    citations.sort((a, b) => {
        return a - b;
    })

    for (var i = citations[citations.length - 1]; i >= 0; i--) {
        count = 0;
        for (var j = 0; j < citations.length; j++) {
            if (i <= citations[j]) count++;
        }
        if (count >= i) {
            //flag = true;
            answer = i;
            break;
        }
    }

    return answer;
}

console.log(solution([2, 2, 2, 2]));