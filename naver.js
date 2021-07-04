function Elevator_solution (money, cost) {
    var answer = 0;
    var sum = 0;
    var res = [];
    cost.forEach(el => {
        sum += el;
        if (sum > money) {
            res.push(answer);
            sum = 0;
            answer = 0;
        } else {
            answer++;
        }

    })

    return answer = Math.max.apply(null, res);
}

// console.log(Elevator_solution(420, [0, 900, 0, 200, 150, 0, 30, 50]))


function invest_solution (k, rates) {
    var answer = k;

    var min = k;
    var max = 0;
    var benefit = 0;
    for (var i = 1; i < rates.length; i++) {
        if (rates[i - 1] > rates[i]) {
            if (i != 1 && rates[i] < rates[i + 1]) {
                benefit += (max - min)
            } else continue;

            min = rates[i];
        }

        if (rates[i - 1] < rates[i]) {
            max = rates[i];
        }
    }

    if (max != 0) benefit += (max - min)

    return answer + benefit;
}

// console.log(invest_solution(1500, [1500, 1400, 1300, 1200]))

function threeix_solution (block, board) {
    var answer = -1;
    var res = [];
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j] == 0) {

                switch (block) {
                    case 0:
                        var copy = board.map(v => v.slice());

                        if (copy[i + 1] != null && copy[i + 2] != null && copy[i + 1][j] == 0 && copy[i + 2][j] == 0) {
                            copy[i][j] = 1;
                            copy[i + 1][j] = 1;
                            copy[i + 2][j] = 1;
                        }

                        res.push(copy.filter(el =>
                            el.reduce(function add (sum, cur) {
                                return sum + cur;
                            }, 0) == 4
                        ).length);

                        break;
                    case 1:
                        var copy = board.map(v => v.slice());

                        if (copy[i][j + 1] == 0 && copy[i][j + 2] == 0) {
                            copy[i][j] = 1;
                            copy[i][j + 1] = 1;
                            copy[i][j + 2] = 1;
                        }

                        res.push(copy.filter(el =>
                            el.reduce(function add (sum, cur) {
                                return sum + cur;
                            }, 0) == 4
                        ).length);


                        break;
                    case 2:
                        var copy = board.map(v => v.slice());

                        if (copy[i + 1] != null && copy[i + 1][j] == 0 && copy[i + 1][j + 1] == 0) {
                            copy[i][j] = 1;
                            copy[i + 1][j] = 1;
                            copy[i + 1][j + 1] = 1;
                        }

                        res.push(copy.filter(el =>
                            el.reduce(function add (sum, cur) {
                                return sum + cur;
                            }, 0) == 4
                        ).length);
                        break;
                    case 3:
                        var copy = board.map(v => v.slice());

                        if (copy[i + 1] != null && copy[i + 1][j] == 0 && copy[i + 1][j - 1] == 0) {
                            copy[i][j] = 1;
                            copy[i + 1][j] = 1;
                            copy[i + 1][j - 1] = 1;
                        }

                        res.push(copy.filter(el =>
                            el.reduce(function add (sum, cur) {
                                return sum + cur;
                            }, 0) == 4
                        ).length);

                        break;
                    case 4:
                        var copy = board.map(v => v.slice());

                        if (copy[i + 1] != null && copy[i][j + 1] == 0 && copy[i + 1][j + 1] == 0) {
                            copy[i][j] = 1;
                            copy[i][j + 1] = 1;
                            copy[i + 1][j + 1] = 1;
                        }

                        res.push(copy.filter(el =>
                            el.reduce(function add (sum, cur) {
                                return sum + cur;
                            }, 0) == 4
                        ).length);

                        break;
                    case 5:
                        var copy = board.map(v => v.slice());

                        if (copy[i + 1] != null && copy[i][j + 1] == 0 && copy[i + 1][j] == 0) {
                            copy[i][j] = 1;
                            copy[i][j + 1] = 1;
                            copy[i + 1][j] = 1;
                        }

                        res.push(copy.filter(el =>
                            el.reduce(function add (sum, cur) {
                                return sum + cur;
                            }, 0) == 4
                        ).length);

                        break;

                }
            }
        }

    }

    return answer = Math.max.apply(null, res);
}

console.log(threeix_solution(0, [[1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 0, 1]]))