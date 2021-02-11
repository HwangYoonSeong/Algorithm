// function solution (n) {
//     var answer = [];
//     //console.log(n);
//     var tri;
//     for (var i = 1; i < n + 1; i++) {
//         tri = [];
//         if (i == n) {
//             for (var j = n; j < 2 * n; j++) {
//                 tri.push(j);

//             }

//         } else tri.push(i);

//         answer.push(tri);

//     }
//     var t = 2 * n;
//     var total = 0;

//     for (var m = 1; m < n + 1; m++) {
//         total += m;
//     }

//     var count = 0;
//     while (t < total + 1) {
//         for (var k = n - 2 - count; k > count * 2; k--) {
//             if (t == total + 1) {
//                 break;
//             }
//             if (count == 0) {
//                 answer[k].push(t++);
//             } else {
//                 answer[k].splice(-1 * count, 0, t++);
//             }

//         }

//         for (var l = (count + 1) * 2; l < n - 1; l++) {
//             if (t == total + 1) {
//                 break;
//             }
//             if (l == n - 2 - count) { //l은 idx 
//                 if (l - 2 == 0) {
//                     answer[l].splice(-1, 0, t++);
//                 } else {
//                     for (var m = 0; m < l - (count + 1); m++) {

//                         answer[l].splice(-(1 + count), 0, t++);
//                         if (t == total + 1) {
//                             break;
//                         }

//                     }
//                 }

//             } else {
//                 answer[l].splice(count + 1, 0, t++);
//             }


//         }
//         count++;
//     }


//     return answer;
// }


function solution (n) {
    const results = []
    for (let i = 1; i <= n; i++) {
        results.push(Array.from({ length: i }, () => 0))
    }

    let counter = 1, startColumn = 0, startRow = 0, endRow = n - 1, endColumn = n - 1, cnt = 0;

    while (startColumn <= endColumn && startRow <= endRow) {
        //맨왼쪽줄
        for (let i = startRow; i <= endRow; i++) {
            results[i][startColumn] = counter
            counter++
        }
        startRow++
        startColumn++

        //맨아래줄
        for (let i = startColumn; i <= endColumn; i++) {
            results[endRow][i] = counter
            counter++
        }
        endColumn--
        endRow--

        //대각선줄
        for (let i = endRow; i >= startRow; i--) {
            results[i][results[i].length - 1 - cnt] = counter
            counter++
        }
        endColumn--
        startRow++
        cnt++
    }

    const answer = []
    for (let i = 0; i < n; i++) {
        for (let x of results[i]) {
            answer.push(x)
        }
    }


    return results.flat();
}




console.log(solution(9));