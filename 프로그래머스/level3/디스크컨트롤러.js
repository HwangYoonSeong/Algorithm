// function solution (jobs) {
//     var answer = 0;
//     var duration = [];
//     var end = 0;
//     jobs.sort((a, b) => {
//         return (a[1] + a[0]) - (b[1] + b[0]);
//     })
//     console.log(jobs);
//     for (var i = 0; i < jobs.length; i++) {
//         if (i === 0) {

//             duration.push(jobs[i][1]);
//             end += jobs[i][0] + jobs[i][1];
//         } else {

//             if (end < jobs[i][0])//전 작업이 끝나는 시간과 현 작업시작시간이 겹치지 않으면 
//             {
//                 duration.push(jobs[i][1]);
//             } else {
//                 duration.push(end + jobs[i][1] - jobs[i][0]);
//                 end += jobs[i][1];
//             }

//         }
//     }
//     console.log(duration);
//     answer = duration.reduce((a, b) => {
//         return a + b;
//     }, 0);

//     return Math.floor(answer / jobs.length);
// }


const solution = (jobs) => {
    let answer = 0,
        j = 0,
        time = 0;
    jobs.sort((a, b) => {
        return a[0] - b[0];
    });

    const priorityQueue = [];
    while (j < jobs.length || priorityQueue.length !== 0) {
        if (jobs.length > j && time >= jobs[j][0]) {
            priorityQueue.push(jobs[j++]);
            priorityQueue.sort((a, b) => {
                return a[1] - b[1];
            });
            continue;
        }
        if (priorityQueue.length !== 0) {
            time += priorityQueue[0][1];
            answer += time - priorityQueue[0][0];
            priorityQueue.shift();
        } else {
            time = jobs[j][0];
        }
    }
    return parseInt(answer / jobs.length);
};
console.log(solution([[0, 3], [1, 9], [2, 6]]));