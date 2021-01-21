function solution (jobs) {
    var answer = 0;
    var duration = [];
    var end = 0;
    jobs.sort((a, b) => {
        return (a[1] + a[0]) - (b[1] + b[0]);
    })
    console.log(jobs);
    for (var i = 0; i < jobs.length; i++) {
        if (i === 0) {

            duration.push(jobs[i][1]);
            end += jobs[i][0] + jobs[i][1];
        } else {
            duration.push(end + jobs[i][1] - jobs[i][0]);
            end += jobs[i][1];
        }
    }
    console.log(duration);
    answer = duration.reduce((a, b) => {
        return a + b;
    }, 0);

    return Math.floor(answer / jobs.length);
}

console.log(solution([[0, 1], [1000, 1000]]));