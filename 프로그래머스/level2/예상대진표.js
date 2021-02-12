function solution (n, a, b) {
    var answer = 1;
    var team = [];
    for (var i = 0; i < n; i++) {
        team.push(i + 1);
    }
    //console.log(team);

    var participant = n;
    while (participant / 2 !== 1) {
        participant /= 2;
        answer++;
    }

    function dividTeam (team) {
        var team2 = team.splice(0, n / 2);

        if (((team2.indexOf(a) !== -1) && (team2.indexOf(b) !== -1)) || ((team.indexOf(a) !== -1) && (team.indexOf(b) !== -1))) {//한 쪽으로 몰려있는 경우
            answer--;
            n /= 2;
            if (((team2.indexOf(a) !== -1) && (team2.indexOf(b) !== -1))) {
                dividTeam(team2);
            } else if (((team.indexOf(a) !== -1) && (team.indexOf(b) !== -1))) {
                dividTeam(team);
            }

        } else {
            return 1;
        }

    }

    dividTeam(team);



    return answer;
}

// 모범답안
function solution2 (n, a, b) {
    let answer = 0;
    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }

    return answer;
}

console.log(solution(8, 4, 5));
