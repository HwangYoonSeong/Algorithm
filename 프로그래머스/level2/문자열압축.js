function solution (s) {
    var answer = 0;
    var results = [];

    //console.log(token);

    //단위 별로 문자열 자르기 
    for (var j = 1; j <= s.length; j++) {
        var i = 0;
        results[j - 1] = [];
        while (s.substr(i, j)) {
            results[j - 1].push(s.substr(i, j));
            i += j;
        }
    }

    //단위 별 같은 문자 탐색 
    //console.log(results);
    for (var i = 0; i < results.length; i++) {
        var count = 1; //중복이 되지 않더라도 1 
        for (var j = 0; j < results[i].length - 1; j++) {
            if (results[i][j] == results[i][j + 1]) {
                results[i][j] = ++count;
            } else {
                count = 1;
            }
        }
        //count만 찍힌 부분 제거하기 위해 0으로 표시 
        for (var k = 0; k < results[i].length - 1; k++) {
            if (!isNaN(results[i][k]) && !isNaN(results[i][k + 1])) {
                results[i][k] = 0;
            }

        }
        // 0인 부분 제거 
        var idx = results[i].indexOf(0)
        while (idx != -1) {
            results[i].splice(idx, 1);
            idx = results[i].indexOf(0)
        }


    }
    //console.log(results);
    for (var i = 0; i < results.length; i++) {

        results[i] = results[i].join('').length;

    }

    //console.log(results);
    //console.log(Math.min.apply(null, results));
    answer = Math.min.apply(null, results);
    return answer;
}

console.log(solution("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxz"));

// let a = [1, 2, 3, 4];
// const idx = a.indexOf(5);
// //a.splice(idx, 1);
// console.log(idx);