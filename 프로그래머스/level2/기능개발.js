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
    rest.push(0);
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

//모범답안 
function solution2 (progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for (let i = 0, j = 0; i < days.length; i++) {
        if (days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1; //js Array는 index 범위 밖에서도 에러 없이 돌아감 
        }
    }

    return answer;
}
console.log(solution2([93, 30, 55], [1, 30, 5]));