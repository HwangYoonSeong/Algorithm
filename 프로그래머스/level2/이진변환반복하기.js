function solution (s) {
    var answer = [];
    var zcount = 0;
    var count = 0;
    var len = 0;

    while (len !== 1) {
        len = s.split('').filter((el) => {
            if (el === '0') zcount++;
            return el === '1'
        }).length;
        s = len.toString(2)
        count++;

    }


    answer.push(count, zcount);
    return answer;
}

console.log(solution("110010101001"));

