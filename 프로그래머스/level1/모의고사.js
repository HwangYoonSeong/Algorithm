function solution (answers) {
    var answer = [];
    var correct = [0, 0, 0];
    var one = [1, 2, 3, 4, 5]
    var two = [2, 1, 2, 3, 2, 4, 2, 5]
    var three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]


    for (var i = 0; i < answers.length; i++) {
        if (answers[i] === one[i % 5]) correct[0]++;
        if (answers[i] === two[i % 8]) correct[1]++;
        if (answers[i] === three[i % 10]) correct[2]++;
    }

    var max = Math.max.apply(null, correct)
    for (var i = 0; i < 3; i++) {
        if (max === correct[i]) {
            answer.push(i + 1)
        }

    }

    return answer
}

console.log(solution([1, 3, 2, 4, 2]))
