function solution (priorities, location) {
    var answer = 0;

    var max = Math.max.apply(null, priorities);
    var temp;
    for (var i = 0; i < priorities.length; i++) {
        priorities[i] = [priorities[i], i];
    }

    while (1) {
        if (priorities[0][0] < max) {
            priorities.push(priorities.shift());
        } else {

            answer++;
            if (priorities[0][1] == location) {
                break;
            }
            priorities.shift();
            temp = priorities.reduce(function (previous, current) {
                return previous[0] > current[0] ? previous : current;
            });
            max = temp[0];
        };
    }



    return answer;
}

var priorities = [2, 2, 2, 1, 3, 4];
var location = [3];
console.log(solution(priorities, location))