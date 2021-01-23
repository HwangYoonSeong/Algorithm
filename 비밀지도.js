function solution (n, arr1, arr2) {
    var answer = [];

    for (var i = 0; i < arr1.length; i++) {
        var temp = arr1[i].toString(2);
        while (temp.length !== n) {
            temp = ('0').concat(temp);
        }

        arr1[i] = temp;
    }

    for (var i = 0; i < arr2.length; i++) {
        var temp = arr2[i].toString(2);
        while (temp.length !== n) {
            temp = ('0').concat(temp);
        }

        arr2[i] = temp;
    }


    var sumArr = new Array(arr1.length).fill('');

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < n; j++) {
            sumArr[i] = sumArr[i].concat(String(Number(arr1[i][j]) + Number(arr2[i][j])));
        }
    }
    //console.log(sumArr);
    answer = new Array(sumArr.length).fill('');
    //console.log(answer);
    for (var i = 0; i < sumArr.length; i++) {
        for (var j = 0; j < n; j++) {
            if (sumArr[i][j] !== '0') answer[i] = answer[i].concat('#');
            else answer[i] = answer[i].concat(' ');
        }
    }
    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

