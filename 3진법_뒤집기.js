var list = [];
function solution (n) {
    var answer = 0;
    while (parseInt(n / 3) > 0) {
        list.push(n % 3);
        n = parseInt(n / 3);
    }
    list.push(n);
    var i = list.length - 1;
    var j = 1;
    var sum = 0;
    while (i >= 0) {

        sum += list[i] * j;
        j *= 3;
        i--;
    }

    answer = sum;
    return answer;
}

function solution2 (n) {
    n = n.toString(3).split('').reverse().join('')
    return n;
    //return parseInt(n, 3)
}


console.log(solution2(45));
