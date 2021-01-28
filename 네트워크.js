
function solution (n, computers) {
    //var answer = 0;
    var visited = new Array(n).fill(-1);

    function dfs (v, count) {
        var stack = [];
        stack.push(v);
        while (stack.length) {
            v = stack.pop();
            if (visited[v] === -1) {
                visited[v] = count;
                //console.log(v);
                for (var i = n - 1; i > -1; i--) {
                    if (v === i) continue;
                    if (computers[v][i] && (visited[i] === -1)) stack.push(i);
                }
            }
        }
    }
    var count = 0;
    var idx = 0;
    while (1) {
        dfs(idx, count);
        count++;
        if (visited.indexOf(-1) === -1) {//모두 방문
            break;
        } else {
            idx = visited.indexOf(-1);
        }


    }

    visited = Array.from(new Set(visited));
    //console.log(visited);




    return visited.length;
}

console.log(solution(6, [[1, 1, 1, 1, 0, 0], [1, 1, 0, 0, 0, 0], [1, 0, 1, 1, 0, 0], [1, 0, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 1]]));