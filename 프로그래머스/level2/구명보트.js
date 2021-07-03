function solution (people, limit) {
    var answer = 0
    people.sort((a, b) => b - a)
    let l = 0
    let r = people.length - 1

    while (l < r) {
        var sum = people[l] + people[r]
        if (sum > limit) { //한 명만 탑승
            l++
        } else { // 두명 탑승 
            l++
            r--
        }
        answer++ //보트 추가 
    }
    if (l == r) answer++ // 마지막에 한명 남을 경우 보트 추가
    return answer
}

console.log(solution([70, 50, 80, 50], 100));