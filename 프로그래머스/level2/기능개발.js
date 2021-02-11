function solution (progresses, speeds) {
    var answer = [];
    var rest = [];
    var count = 0;
    var max = 0;

    for (var i in progresses) {//남은 날 계산 
        if ((100 - progresses[i]) % speeds[i]) { //나머지 존재 여부 
            rest.push(parseInt((100 - progresses[i]) / speeds[i]) + 1);
        } else {
            rest.push(parseInt((100 - progresses[i]) / speeds[i]));
        }
    }
    rest.push(0); //마지막 처리 
    max = rest[0];
    for (var j = 0; j < rest.length - 1; j++) {
        count++;

        if ((max < rest[j + 1]) || (rest[j + 1] == 0)) {
            answer.push(count)
            max = rest[j + 1];
            count = 0;
        }
    }
    return answer;
}

console.log(solution([96, 99, 98, 97], [1, 1, 1, 1]));