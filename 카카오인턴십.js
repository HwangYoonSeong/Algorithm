function solution1 (s) {
    var answer = 0;
    var result = [];
    s = s.split('')
    while (s.length) {
        if (!isNaN(s[0])) {// 문자가 아니면 
            result.push(s[0])
            s.splice(0, 1)
        } else {//문자이면 
            if (s[0] === 'z') {
                result.push('0')
                s.splice(0, 4)
            } else if (s[0] === 'o') {
                result.push('1')
                s.splice(0, 3)

            } else if (s[0] === 't') {
                if (s[1] === 'w') {
                    result.push('2')
                    s.splice(0, 3)
                } else {
                    result.push('3')
                    s.splice(0, 5)
                }

            } else if (s[0] === 'f') {
                if (s[1] === 'o') {
                    result.push('4')
                    s.splice(0, 4)
                } else {
                    result.push('5')
                    s.splice(0, 4)
                }

            } else if (s[0] === 's') {
                if (s[1] === 'i') {
                    result.push('6')
                    s.splice(0, 3)
                } else {
                    result.push('7')
                    s.splice(0, 5)
                }
            } else if (s[0] === 'e') {
                result.push('8')
                s.splice(0, 5)
            } else if (s[0] === 'n') {
                result.push('9')
                s.splice(0, 4)
            }
        }
    }



    return answer = result.join('') * 1;
}

// console.log(solution1("23four5six7"))


function showMatrix (arr) {
    arr.forEach((el) => {
        var temp = [];
        el.forEach((i) => {
            temp.push(i);
        })
        console.log(temp.join(' '));
    })
}

function solution2 (places) {
    var answer = [];



    for (var k = 0; k < 5; k++) {
        const arr = Array.from(Array(9), () => Array(9).fill('O'))

        for (var i = 2; i < 7; i++) {
            for (var j = 2; j < 7; j++) {
                arr[i][j] = places[k][i - 2][j - 2]
            }
        }

        var bflag = false;
        for (var i = 2; i < 7; i++) {
            for (var j = 2; j < 7; j++) {
                if (arr[i - 2][j - 2] === 'P') {
                    if (arr[i - 4][j - 2] === 'P') {//1
                        if (arr[i - 3][j - 2] !== 'X') {
                            answer.push(0)
                            bflag = true;
                            break;
                        }
                    } else if (arr[i - 3][j - 3] === 'P') {//2
                        if ((arr[i - 3][j - 2] !== 'X') || (arr[i - 2][j - 3] !== 'X')) {
                            answer.push(0)
                            bflag = true;
                            break;
                        }
                    } else if (arr[i - 3][j - 2] === 'P') {//3
                        answer.push(0)
                        bflag = true;
                        break;
                    } else if (arr[i - 3][j - 1] === 'P') {//4
                        if ((arr[i - 3][j - 2] !== 'X') || (arr[i - 2][j - 1] !== 'X')) {
                            answer.push(0)
                            bflag = true;
                            break;
                        }
                    } else if (arr[i - 2][j - 4] === 'P') {//5
                        if (arr[i - 2][j - 3] !== 'X') {
                            answer.push(0)
                            bflag = true;
                            break;
                        }
                    } else if (arr[i - 2][j - 3] === 'P') {//6
                        answer.push(0)
                        bflag = true;
                        break;
                    } else if (arr[i - 2][j - 1] === 'P') {//8
                        answer.push(0)
                        bflag = true;
                        break;
                    } else if (arr[i - 2][j] === 'P') {//9
                        if (arr[i - 2][j - 1] !== 'X') {
                            answer.push(0)
                            bflag = true;
                            break;
                        }
                    } else if (arr[i - 1][j - 3] === 'P') {//10
                        if ((arr[i - 2][j - 3] !== 'X') || (arr[i - 1][j - 2] !== 'X')) {
                            answer.push(0)
                            bflag = true;
                            break;
                        }
                    } else if (arr[i - 1][j - 2] === 'P') {//11
                        answer.push(0)
                        bflag = true;
                        break;
                    } else if (arr[i - 1][j - 1] === 'P') {//12
                        if ((arr[i - 1][j - 2] !== 'X') || (arr[i - 2][j - 1] !== 'X')) {
                            answer.push(0)
                            bflag = true;
                            break;
                        }
                    } else if (arr[i][j - 2] === 'P') {//13
                        if (arr[i - 1][j - 2] !== 'X') {
                            answer.push(0)
                            bflag = true;
                            break;
                        }
                    }

                }
            }

            if (bflag) break;

        }

        if (!bflag) answer.push(1)
    }


    return answer;
}

//console.log(solution2([["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPXX", "OXXXP", "POOXX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]]))


function solution (n, k, cmd) {
    var answer = '';

    var table = Array.from({ length: n }, (v, i) => i);
    var cursor = k;
    var buff = [];

    for (var i = 0; i < cmd.length; i++) {
        if (cmd[i][0] === 'D') {
            cursor += cmd[i][2] * 1;
            break;
        }
        if (cmd[i][0] === 'U') {
            cursor -= cmd[i][2] * 1
            break;
        }
        if (cmd[i][0] === 'C') {
            buff.push(table[cursor])
            table.splice(cursor, 1);
            if (cursor === table.length - 1) cursor -= 1;
            break;
        }
        if (cmd[i][0] === 'Z') {
            var insert = buff.pop()
            var flag = false;
            for (var j = 0; j < table.length; j++) {
                if (table[j] > insert) {
                    table.splice(j, 0, insert)
                    flag = true;
                    break;
                }
            }
            if (!flag) table.push(insert)
            break;
        }
    }
    var i = 0;
    var j = 0;
    while (i < n) {
        if (i === table[j]) {
            answer += 'O';
            i++;
            j++;
        }
        else {
            answer += 'X';
            i++;
        }

    }

    return answer;
}

console.log(solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"]))