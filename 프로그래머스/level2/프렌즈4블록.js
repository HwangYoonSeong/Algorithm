function solution (m, n, board) {
    var answer = 0;
    var rBoard = [];
    var check = Array.from(Array(n), () => Array(m).fill(0))
    for (var i = 0; i < n; i++) {
        var temp = [];
        for (var j = m - 1; j >= 0; j--) {
            temp.push(board[j][i]);
        }
        rBoard.push(temp);
    }
    //console.log(rBoard);

    while (1) {
        for (var i = 0; i < n - 1; i++) {
            for (var j = 0; j < m - 1; j++) {
                if (isNaN(rBoard[i][j]) === true && rBoard[i][j] === rBoard[i][j + 1] && rBoard[i + 1][j] === rBoard[i + 1][j + 1] && rBoard[i][j] === rBoard[i + 1][j]) {
                    check[i][j]++;
                    check[i][j + 1]++;
                    check[i + 1][j]++;
                    check[i + 1][j + 1]++;
                }
            }
        }

        var count = 0;
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < m; j++) {
                if (check[i][j] !== 0) count++;
            }
        }

        if (count === 0) break;
        else {
            answer += count;
        }

        //제거 and 빈공간은 0으로 채움
        for (var i = 0; i < n; i++) {
            var rCount = 0;
            for (var j = 0; j < m; j++) {
                if (check[i][j] !== 0) {
                    rBoard[i][j] = '0';
                    rCount++;
                }
            }
            rBoard[i] = rBoard[i].filter(el => el !== '0');

            while (rCount !== 0) {
                rBoard[i].push('-1');
                rCount--;
            }
        }

        //showMatrix(rBoard);
        check = Array.from(Array(n), () => Array(m).fill(0));

    }



    return answer;
}

console.log(solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']));