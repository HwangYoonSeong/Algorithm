function solution (n, words) {
    var answer = [0, 0];
    var order = [];
    var idx = 0;
    for (var i = 0; i < words.length; i++) {
        order.push((i % n) + 1);

    }
    for (var i = 1; i < words.length; i++) {
        if ((words[i][0] !== words[i - 1][words[i - 1].length - 1]) || (words.slice(0, i).indexOf(words[i]) !== -1)) {
            idx = i;
            break;
        }
    }

    if (idx !== 0) {
        answer[0] = order[idx];
        answer[1] = order.slice(0, idx + 1).filter(el => el === answer[0]).length;
    }


    return answer;
}

console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']))