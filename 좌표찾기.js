function solution (v) {
    var answer = [];
    var xlist = [];
    var ylist = [];

    v.forEach((el) => {
        xlist.push(el[0]);
        ylist.push(el[1]);
    })

    var xset = Array.from(new Set(xlist));
    var yset = Array.from(new Set(ylist));

    var count = xlist.filter(el => el === 3).length;
    xset.forEach((el) => {
        if (xlist.filter(e => e === el).length === 1) answer.push(el);
    })

    yset.forEach((el) => {
        if (ylist.filter(e => e === el).length === 1) answer.push(el);
    })

    //console.log(count);

    return answer;
}

console.log(solution([[1, 1], [2, 2], [1, 2]]));

