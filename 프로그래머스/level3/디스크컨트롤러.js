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


const solution2 = (jobs) => {
    let answer = 0,
        j = 0,
        time = 0;
    // 하드디스크가 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업 부터(문제의 제한사항)
    jobs.sort((a, b) => {
        return a[0] - b[0];
    });


    // 이런 생각을 하게된 계기 
    const priorityQueue = [];
    while (j < jobs.length || priorityQueue.length !== 0) {  // 수행중인 작업이 있을 경우 
        // 작업 수행 중에 다른 작업이 존재할 경우 우선순위 큐에 넣어서 정렬 해둠 
        if (jobs.length > j && time >= jobs[j][0]) {
            priorityQueue.push(jobs[j++]);
            priorityQueue.sort((a, b) => {
                return a[1] - b[1];
            });
            continue;
        }
        // 새로운 작업의 경우 우선순위 큐 shift 
        // 동시에 걸린 시간 누적하여 계산 
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
