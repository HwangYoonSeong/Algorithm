// 4,7,8 런타임 에러 
function solution1 (n, costs) {
    var answer = 0;
    var costsList = [];
    for (var i = 0; i < costs.length; i++) {
        costsList.push([i, costs[i][2]]);
    }


    //조합((1,2)===(2,1))
    const getCombinations = function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
            const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
            const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
            results.push(...attached); // 배열 spread syntax 로 모두다 push
        });

        return results; // 결과 담긴 results return
    }

    //console.log(costsList);
    var sumList = [];
    var comb = getCombinations(costsList, n - 1)
    //console.log(comb);
    comb.sort((a, b) => {
        return (a.reduce((acc, cur) => { return acc + cur[1] }, 0)) - (b.reduce((acc, cur) => { return acc + cur[1] }, 0))
    }
    )

    //console.log(comb);


    //bfs
    function bfs (v, adj) {
        var visited = new Array(n).fill(false);
        var queue = [];
        var temp = [];
        queue.push(v);
        while (queue.length) {
            v = queue.shift();
            if (visited[v] === false) {
                visited[v] = true;
                //console.log(v);
                temp.push(v);
                for (var i = 0; i < n; i++) {//n은 정점의 개수

                    if (adj[v][i] && (visited[i] === false)) queue.push(i);
                }
            }
        }

        return temp.length;
    }

    for (var i = 0; i < comb.length; i++) {
        var adj = Array.from(Array(n), () => Array(n).fill(0))
        for (var j = 0; j < n - 1; j++) {
            adj[costs[comb[i][j][0]][0]][costs[comb[i][j][0]][1]] = 1;
            adj[costs[comb[i][j][0]][1]][costs[comb[i][j][0]][0]] = 1;
        }

        if (bfs(costs[comb[i][0][0]][0], adj) === n) {
            answer = comb[i].reduce((a, b) => { return a + b[1] }, 0);
            break
        }


    }
    return answer;
}

// 모범 답안 (Union-Find)
// cost를 오름차순으로 정렬 후 
// 가장 처음 전체 섬을 연결했을 때의 비용을 반환 
// MST 기본 문제 (Kruscal 사용)
function solution2 (n, costs) {
    var answer = 0;
    costs.sort((a, b) => a[2] - b[2])
    var cycleTable = Array(n).fill(0).map((element, index) => index)

    while (!isOne(cycleTable)) { //union-find 
        var current = costs.shift()
        var one = current[0]
        var the_other = current[1]
        var cost = current[2]
        if (cycleTable[the_other] !== cycleTable[one]) {
            cycleTable = changeCycleTableNumber(cycleTable, one, the_other)
            answer += cost
        }
    }

    return answer;
}

function changeCycleTableNumber (cycleTable, one, the_other) {
    var cycleTheOther = cycleTable[the_other]
    var cycleOne = cycleTable[one]
    for (var i = 0; i < cycleTable.length; i++) {
        if (cycleTable[i] === cycleTheOther) cycleTable[i] = cycleOne //부모노드 찾아서 초기화 
    }
    return cycleTable
}

function isOne (cycleTable) { //모든 요소가 같은지 검사 
    for (var i = 1; i < cycleTable.length; i++) {
        if (cycleTable[i - 1] !== cycleTable[i]) return false
    }
    return true
}

// Standard Union-find 
function solution3 (n, costs) {
    var answer = 0;
    costs.sort((a, b) => a[2] - b[2])
    var cycleTable = Array(n).fill(0).map((element, index) => index)

    costs.forEach(el => {
        if (!findParent(cycleTable, el[0], el[1])) { //추가할 노드가 같은 합집합이 아닐 경우 
            unionParent(cycleTable, el[0], el[1]); // union 
            answer += el[2]; //cost 추가 
        }
    })
    return answer;
}

// 부모 노드를 찾는 재귀함수
function getParent (arr, x) {
    if (arr[x] === x) return x;
    return arr[x] = getParent(arr, arr[x]);
}

// 두 개의 노드를 같은 부모 노드로 합친다.
function unionParent (arr, a, b) {
    a = getParent(arr, a);
    b = getParent(arr, b);

    // 두 노드 중 작은 부모 노드값을 가진 값으로 합친다.
    if (a < b)
        arr[b] = a;
    else
        arr[a] = b;

}

// 같은 부모 노드를 갖는지 확인한다.
function findParent (arr, a, b) {
    a = getParent(arr, a);
    b = getParent(arr, b);

    if (a === b)
        return true;
    else
        return false;
}



console.log(solution3(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]]));
