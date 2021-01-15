function solution (n) {
    var answer = 0;
    var bin = n.toString(2);
    var oneList = [];
    for (var i = 0; i < bin.length; i++) {
        oneList.push(bin[i] * 1);
    }


    var oneCount = oneList.filter(el => el === 1).length;



    var bigNumOne = 0;
    while (oneCount !== bigNumOne) {
        var bin2 = (++n).toString(2);
        var oneList2 = [];
        for (var i = 0; i < bin2.length; i++) {
            oneList2.push(bin2[i] * 1);
        }


        bigNumOne = oneList2.filter(el => el === 1).length;
    }
    answer = n;
    return answer;
}

console.log(solution(15));