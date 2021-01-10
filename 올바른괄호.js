function solution (s) {
    var answer = true;
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (i === 0) stack.push(s[i]);
        else {
            if ((stack[stack.length - 1] === "(") && (s[i] === ")")) {
                stack.pop();
            } else stack.push(s[i]);
        }
    }

    if (stack.length) answer = false;
    return answer;
}

console.log(solution(")()("))