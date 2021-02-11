
function solution (n) {

    var res = [];
    var num;

    do {
        num = 0;
        switch (n % 3) {
            case 1:
                num = 1;
                break;

            case 2:
                num = 2;
                break;
            case 0:
                num = 4;
                break;
        }
        res.unshift(num);

        if (n % 3 == 0) {
            n = n - 1;
        }
        n = parseInt(n / 3);
    } while (n != 0)

    var answer = res.join("");
    return answer;

}
//console.log(solution(3));
// for (var i = 1; i < 22; i++) {
//     console.log(solution(i));
// }


//다른사람의 풀이 

function change124 (n) {
    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}

console.log([1, 2][1]);
