//  dijkstra알고리즘 >> 7,8,9 테스트 케이스에서 core dump 


// function choose (distance, n, found) {
//     var min = 20000;
//     var minpos = -1;

//     for (var i = 0; i < n; i++) {
//         if (distance[i] < min && !found[i]) {
//             min = distance[i];
//             minpos = i;
//         }
//     }

//     return minpos;

// }
// var distance = new Array(20000).fill(0);
// var found = new Array(20000).fill(0);
// function Dijkstra (adj, start) {

//     for (var i = 0; i < adj.length; i++) {
//         distance[i] = adj[start][i];
//         found[i] = false;
//     }

//     found[start] = true;
//     distance[start] = 0;
//     for (var i = 0; i < adj.length; i++) {
//         var u = choose(distance, adj.length, found);
//         found[u] = true;
//         for (var w = 0; w < adj.length; w++) {
//             if (!found[w]) {
//                 if (distance[u] + adj[u][w] < distance[w]) {
//                     distance[w] = distance[u] + adj[u][w];
//                 }
//             }
//         }
//     }

//     //console.log(distance);
//     return distance;
// }
// function solution (n, edge) {
//     var answer = 0;

//     const adj = Array.from(Array(n), () => Array(n).fill(100000))

//     for (var i = 0; i < adj.length; i++) {
//         adj[i][i] = 0;
//     }
//     edge.forEach((el, idx) => {

//         adj[el[0] - 1][el[1] - 1] = 1
//         adj[el[1] - 1][el[0] - 1] = 1

//     })

//     var distance = Dijkstra(adj, 0);
//     //showMatrix(adj);

//     var max = Math.max.apply(null, distance);

//     answer = distance.filter((el) => {
//         return el === max
//     }).length;
//     return answer;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////
function showMatrix (arr) {
    arr.forEach((el) => {
        var temp = [];
        el.forEach((i) => {
            temp.push(i);
        })
        console.log(temp.join(' '));
    })
}

//bfs
function bfs (adj, visited, v) {
    var queue = [];
    var visit = [];

    var distance = 0;
    var dList = [];
    var idx = 0;
    queue.push(v);
    dList.push(distance);
    while (queue.length) {
        v = queue.shift();
        distance = dList[idx++] + 1
        if (visited[v] === false) {
            visited[v] = true;
            visit.push(v + 1);


            for (var i = 0; i < adj.length; i++) {//n은 정점의 개수

                if (adj[v][i] && (visited[i] === false)) {
                    if (queue.indexOf(i) === -1) {
                        queue.push(i);
                        dList.push(distance);
                    }

                }
            }
        }
    }
    // console.log(visit);
    // console.log(dList);

    return dList;
}


function solution (n, edge) {
    var answer = 0;

    const adj = Array.from(Array(n), () => Array(n).fill(0))
    var visited = new Array(n).fill(false);

    for (var i = 0; i < edge.length; i++) {

        adj[edge[i][0] - 1][edge[i][1] - 1] = 1
        adj[edge[i][1] - 1][edge[i][0] - 1] = 1

    }

    //showMatrix(adj);
    var dList = bfs(adj, visited, 0);
    var max = Math.max.apply(null, dList);

    answer = dList.filter((el) => {
        return el === max
    }).length;

    return answer;
}
console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));


////////////////////////////////////모범답안////////////////////////////////
//나의 코드는 edge 배열을 바탕으로 인접행렬을 생성해서 bfs하는 반면 
//edge 배열로 바로 접근해서 bfs하는 것에서 나의 코드와 차이를 보인다 

function solution2 (n, edge) {
    var answer = 0;
    return bfs(edge, 1, n);
}

function bfs2 (arr, start, end) {
    var visited = new Array(end + 1)
    var level = new Array(end + 1)
    var queue = [start]
    level[0] = 0
    level[start] = 0
    visited[start] = true
    var lev
    while (queue.length) {

        var node = queue.shift()
        lev = level[node] + 1
        for (var edge of arr) {
            if (edge[0] == node && visited[edge[1]] == undefined) {
                queue.push(edge[1])
                visited[edge[1]] = true
                level[edge[1]] = lev
            }
            else if (edge[1] == node && visited[edge[0]] == undefined) {
                queue.push(edge[0])
                visited[edge[0]] = true
                level[edge[0]] = lev
            }
        }
    }
    console.log(level);
    return level.filter((i) => i == lev - 1).length
}