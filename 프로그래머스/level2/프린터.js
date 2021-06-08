function solution (priorities, location) {
    var answer = 0;

    var max = Math.max.apply(null, priorities);
    var temp2;
    for (var i = 0; i < priorities.length; i++) {
        priorities[i] = [priorities[i], i];
    }
    console.log(priorities);
    while (1) {
        if (priorities[0][0] < max) {
            priorities.push(priorities.shift());
        } else {

            answer++;
            if (priorities[0][1] == location) {
                break;
            }
            priorities.shift();
            // 가장 높은 우선순위 찾는 과정
            // temp = priorities.reduce(function (previous, current) {
            //     return previous[0] > current[0] ? previous : current;
            // });
            // max = temp[0];

            // 남은 priorities[0]끼리 비교해서 가장 높은걸 찾으면 시간초과?? >> 안남
            temp2 = priorities.slice(0);
            temp2.sort((a, b) => {
                return b[0] - a[0]
            })
            max = temp2[0][0]
        };
    }
    return answer;
}

//모범 답안 
function solution2 (priorities, location) {
    var list = priorities.map((t, i) => ({
        my: i === location,
        val: t
    }));
    var count = 0;
    while (true) {
        var cur = list.splice(0, 1)[0];
        if (list.some(t => t.val > cur.val)) {
            list.push(cur);
        }
        else {
            count++;
            if (cur.my) return count;
        }
    }
}

var priorities = [2, 2, 2, 1, 3, 4];
console.log(solution(priorities, 3));