function solution (s, n) {
    var answer = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            answer = answer.concat(" ");
            continue;
        }

        var ascii = s[i].charCodeAt()
        if (ascii < 91) {
            ascii += n;
            if (ascii > 90) ascii = ascii - 26;
        } else {
            ascii += n;
            if (ascii > 122) ascii = ascii - 26;
        }


        answer = answer.concat(String.fromCharCode(ascii));
    }
    return answer;
}

console.log(solution("a B z", 4));
