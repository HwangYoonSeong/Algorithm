function solution (people, limit) {
    var answer = '';
    var stack = [];

    for (var i = 0; i < Number.length; i++) {
        var el = number[i];

        while (k > 0 && stack[stack.legnth - 1] < el) {
            stack.pop();
            k--;
        }

        stack.push(el);
    }

    stack.splice(stack.length - k, k);
    answer = stack.join("");

    return answer
}