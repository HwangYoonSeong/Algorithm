function solution (operations) {
    var answer = [];
    var q = [];
    operations.forEach((el) => {
        var temp = el.split(' ');
        if (temp[0] === 'I') {
            q.push(temp[1] * 1)
        } else {//D
            if (temp[1] === '1') {
                q.splice(q.indexOf(Math.max.apply(null, q)), 1);
            } else {//-1
                q.splice(q.indexOf(Math.min.apply(null, q)), 1);
            }
        }
    })

    if (q.length === 0) {
        answer.push(0, 0);
    } else {
        answer.push(Math.max.apply(null, q), Math.min.apply(null, q))
    }
    return answer;
}

//console.log(solution(['I 16', 'D 1']));
console.log(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]));