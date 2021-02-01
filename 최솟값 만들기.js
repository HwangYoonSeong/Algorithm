function solution (A, B) {
    var answer = 0;
    var idx = [];
    for (var i = 0; i < A.length; i++) {
        idx.push(i);
    }

    function randomPick (arr) {
        if (arr.length === A.length) return arr;

        var temp = [];
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < idx.length; j++) {
                if (idx[j] === arr[i][0]) continue;
                else {
                    temp.push(idx[j]);
                    break;
                }
            }

        }

        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < idx.length; j++) {
                if (idx[j] === arr[i][1]) continue;
                else {
                    temp.push(idx[j]);
                    break;
                }
            }
        }
        if (temp.length === 2) {
            arr.push(temp);
            break;
        }




        return randomPick(arr);
    }

    console.log(randomPick([[0, 0]]));
    return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));