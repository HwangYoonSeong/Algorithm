function solution (record) {
    let answer = [];

    //1. 먼저 배열을 하나 생성해 2차원 배열로 split을 한다.
    let newArr = record.map((str) => str.split(" "));

    //2. 그 후 기록의 마지막 닉네임을 아이디와 매칭합니다.
    //2.1 여기서 Enter와 Change 가 length가 3임을 이용하면 더 쉽게 접근할 수 있습니다.
    let nickNameSet = {};
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].length === 3) {
            nickNameSet[newArr[i][1]] = newArr[i][2];
        }
    }

    //3. 그후 닉네임을 통해 출력합니다.
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i][0] === "Enter") {
            answer.push(nickNameSet[newArr[i][1]] + "님이 들어왔습니다.");
        } else if (newArr[i][0] === "Leave") {
            answer.push(nickNameSet[newArr[i][1]] + "님이 나갔습니다.");
        }
    }

    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))