function solution (array, commands) {
    var answer = [];
    for (var i = 0; i < commands.length; i++) {
        var temp = array.slice(commands[i][0] - 1, commands[i][1])
        //console.log(temp)
        temp.sort((a, b) => {
            return a - b
        })
        answer.push(temp[commands[i][2] - 1])
    }
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))

// var arr = [1, 5, 2, 6, 3, 7, 4];
// var temp = arr.slice(1, 2)
// console.log(temp)
// temp.sort((a, b) => {
//     return a - b
// })

// console.log(arr)
