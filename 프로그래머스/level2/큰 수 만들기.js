function solution (number, k) {
    var answer = '';
    var stack = [];

    for (var i = 0; i < number.length; i++) {
        var el = number[i];

        while (k > 0 && stack[stack.length - 1] < el) {
            // stack[-1]=undefined , undefined와 비교 연산자는 무조건 false 반환
            // 최상단의 stack에는 항상 가장 큰 수 유지
            stack.pop();
            k--;
        }

        stack.push(el);
    }

    stack.splice(stack.length - k, k);
    //k만큼 제거해야하는데 k가 남은 경우 마지막에 그만큼 제거 
    answer = stack.join("");

    return answer;
}

function solution2 (number, k) {
    var answer = [];
    var list = number.split('').map(el => parseInt(el));
    var sorted = list.slice().sort((a, b) => {
        return b - a
    })
    var numlen = number.length - k;//선택해야하는 숫자 갯수 
    console.log(list.shift());
    console.log(sorted);


    for (var i = 0; i < list.length; i++) {
        if (list[i] == sorted[0]) {
            if ((list.length - i) >= numlen) { // num에 남아 있는 길이가 만들어야 하는 숫자 이상인 경우 
                answer.push(list[i]);
                sorted.shift();
                numlen--;
            }
        }
    }

    return answer;

}

console.log(solution('4177252841', 4))
