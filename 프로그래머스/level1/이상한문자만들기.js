function solution (s) {
    var answer = '';
    var result = [];
    var splited = s.split(" ");

    for (var i = 0; i < splited.length; i++) {
        var temp = ""
        for (var j = 0; j < splited[i].length; j++) {
            if (j % 2 === 0) temp += splited[i][j].toUpperCase();
            else temp += splited[i][j].toLowerCase();
        }
        result.push(temp);
    }
    return answer = result.join(' ');
}

console.log(solution("try hello world"));