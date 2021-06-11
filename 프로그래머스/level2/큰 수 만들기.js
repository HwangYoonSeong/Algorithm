function solution (number, k) {
    var answer = '';
    var stack = [];

    for (var i = 0; i < number.length; i++) {
        var el = number[i];

        while (k > 0 && stack[stack.length - 1] < el) {
            stack.pop();
            k--;
        }

        stack.push(el);
    }
    stack.splice(stack.length - k, k);
    answer = stack.join("");

    return answer;
}

console.log(solution('4177252841', 4))