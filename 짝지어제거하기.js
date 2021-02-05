function solution (s) {
    var answer = 0;
    var stack = [];
    // s.split('').forEach((el, idx) => {
    //     if (idx === 0) stack.push(el);
    //     else {
    //         if (stack[stack.length - 1] === el) stack.pop();
    //         else {
    //             stack.push(el);
    //         }
    //     }
    // })

    s = s.split('');
    for (var i = 0; i < s.length; i++) {
        if (i === 0) stack.push(s[i]);
        else {
            if (stack[stack.length - 1] === s[i]) stack.pop();
            else stack.push(s[i])
        }
    }
    if (stack.length === 0) answer = 1;
    return answer;
}

console.log(solution('abaa'));