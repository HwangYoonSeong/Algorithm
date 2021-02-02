function solution (arr1, arr2) {
    var answer = [];
    for (var i = 0; i < arr1.length; i++) {
        var temp = [];
        for (var j = 0; j < arr2[0].length; j++) {
            temp.push(0);
        }
        answer.push(temp);
    }

    for (var k = 0; k < arr1.length; k++) {
        for (var i = 0; i < arr2[0].length; i++) {
            var sum = 0;
            for (var j = 0; j < arr1[0].length; j++) {

                sum += arr1[k][j] * arr2[j][i]

            }
            answer[k][i] = sum;

        }
    }

    return answer;
}

console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]))