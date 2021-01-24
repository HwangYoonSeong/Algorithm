function solution (n, record) {
    var answer = [];
    var serverUser = [];

    for (var i = 0; i < record.length; i++) {
        var temp = record[i].split(' ');
        serverUser.push(temp);
    }

    //console.log(serverUser);
    var Server = [];
    for (var i = 0; i < n; i++) {
        Server.push([]);
    }
    //console.log(Server[1]);
    for (var i = 0; i < serverUser.length; i++) {
        // for (var j = 0; j < serverUser.length; j++) {
        var temp = Number(serverUser[i][0]) - 1

        if (Server[temp].indexOf(serverUser[i][1]) !== -1) {//중복되는 닉네임 존재
            continue;
        } else {
            if (Server[temp].length >= 5) {
                Server[temp].shift()
                Server[temp].push(serverUser[i][1]);
            } else {
                Server[temp].push(serverUser[i][1]);
            }
        }


    }

    //console.log(Server);

    for (var i = 0; i < Server.length; i++) {
        for (var j = 0; j < Server[i].length; j++) {
            answer.push(Server[i][j]);

        }
    }
    return answer;
}

console.log(solution(1, ["1 fracta", "1 sina", "1 hana", "1 robel", "1 abc", "1 sina", "1 lynn"]))

//console.log(solution(4, ["1 a", "1 b", "1 abc", "3 b", "3 a", "1 abcd", "1 abc", "1 aaa", "1 a", "1 z", "1 q", "3 k", "3 q", "3 z", "3 m", "3 b"]))