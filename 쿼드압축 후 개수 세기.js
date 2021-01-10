function solution (arr) {
    var answer = [];
    var zeroCount = 0;
    var oneCount = 0;
    quard(arr, 1, [0, 0]);

    function quard (arr, n, idx) {
        var sum = 0;
        if (arr.length / n === 1) {
            sum = arr[idx[0]][idx[1]];
        } else {
            for (var i = idx[0]; i < idx[0] + arr.length / n; i++) {
                for (var j = idx[1]; j < idx[1] + arr.length / n; j++) {
                    sum += arr[i][j];
                }
            }
        }


        if (sum === 0) {
            zeroCount++;
            return;
        }
        else if (sum === (arr.length / n * arr.length / n)) {
            oneCount++;
            return;
        }
        else {

            n *= 2;
            quard(arr, n, idx);
            quard(arr, n, new Array(idx[0], idx[1] + arr.length / n));
            quard(arr, n, new Array(idx[0] + arr.length / n, idx[1]));
            quard(arr, n, new Array(idx[0] + arr.length / n, idx[1] + arr.length / n));

        }
    }

    return answer = new Array(zeroCount, oneCount);
}

console.log(solution([[1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 1], [0, 1, 0, 0, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 1, 1, 1, 1]]));

