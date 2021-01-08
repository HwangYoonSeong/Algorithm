
// function solution (board) {
//     var answer = 0;
//     var squareList = [];
//     for (var i = 0; i < board.length; i++) {
//         var count = 0;
//         var idx = 0;
//         for (var j = 0; j < board[0].length; j++) {
//             if (board[i][j] === 1) {
//                 if (count === 0) idx = j;//행의 첫번째 1 기억 
//                 count++;
//             }
//         }
//         if (i + count - 1 < board.length) {
//             for (var m = count; m > 0; m--) {
//                 var isSquare = true;

//                 for (var k = i; k < m; k++) {
//                     for (var l = idx; l < m; l++) {
//                         if (board[k][l] === 0) {
//                             isSquare = false;
//                             break;
//                         }
//                     }
//                     if (!isSquare) break;
//                 }


//                 if (isSquare) {
//                     squareList.push(m * m);
//                     break;
//                 }
//             }
//         }

//     }


//     if (squareList.length === 0) {
//         answer = 0;
//     } else answer = Math.max.apply(null, squareList);
//     return answer
// }

function solution (board) {
    var answer = 0;

    var lengthY = board.length;
    var lengthX = board[0].length;
    var max = 0;

    // 행이나 열의 길이가 2 미만이라면 직접 돌리면서 1이 하나라도 있는지 체크 합니다.
    // 하나라도 있으면 통과.
    if (lengthY < 2 || lengthY < 2) {
        for (var i = 0; i < lengthY; i++) {
            for (var j = 0; j < lengthX; j++) {
                if (board[i][j] === 1) {
                    max = 1;
                }
            }
        }
    } else {
        //아래 설명 참조
        for (var i = 1; i < lengthY; i++) {
            for (var j = 1; j < lengthX; j++) {
                if (board[i][j] === 1) {
                    board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
                    if (board[i][j] > max) {
                        max = board[i][j];
                    }
                }
            }
        }
    }

    return Math.pow(max, 2);
}


출처: https://blog.sonim1.com/212 [Kendrick's Blog]




console.log(solution([[0, 0, 0, 0]]));