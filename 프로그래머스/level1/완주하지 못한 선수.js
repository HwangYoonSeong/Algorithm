function solution1 (participant, completion) {
    var answer = '';
    participant.sort()
    completion.sort()


    for (var i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            answer = participant[i];
            return answer;
        }
    }
}

//hash로 푼 방법
function solution2 (participant, completion) {
    const hash = {};

    for (let val of participant) {
        if (!hash[val]) hash[val] = 0;
        hash[val]++;
    }
    console.log(hash)

    //완주한 선수는 제외
    completion.forEach(val => hash[val]--);

    //값이 남아있는 선수가 완주하지 못한 선수
    for (let key in hash) if (hash[key]) return key;
}
console.log(solution2(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))