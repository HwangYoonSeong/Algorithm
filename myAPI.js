//2차원 배열 생성
const arr2 = Array.from(Array(9), () => Array(9).fill(0))
arr2[0][0] = 2;

//showMatrix(arr2);
function showMatrix (arr) {
    arr.forEach((el) => {
        var temp = [];
        el.forEach((i) => {
            temp.push(i);
        })
        console.log(temp.join(' '));
    })
}


//2중 for문 
for (var i = 0; i < 3; i++) {

    for (var j = 0; j < 3; j++) {

    }
}

//++4중 for문
for (var k = 2; k < 3; k++) {

    for (var l = 2; l < 3; l++) {

    }
}

//최대공약수
function gcd (a, b) {
    return a % b ? gcd(b, a % b) : b
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


//순열((1,2)!==(2,1))
const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)] // 해당하는 fixed를 제외한 나머지 뒤
        const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
        const attached = permutations.map((permutations) => [fixed, ...permutations]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        results.push(...attached); // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}


//소수 찾기
list.forEach((el, idx) => {
    isPrime = true;

    for (var l = 2; l <= Math.sqrt(el); l++) {
        if (el % l == 0) {
            isPrime = false;
            break;
        }
    }
    if (el === 1 || el === 0) {
        isPrime = false;
    }

    if (isPrime) {
        answer++;
    }
})


//dfs
function dfs (v) {
    var stack = [];
    stack.push(v);
    while (stack.length) {
        v = stack.pop();
        if (visited[v] === false) {
            visited[v] = true;
            //console.log(v);
            for (var i = n - 1; i > -1; i--) { //n은 정점의 개수

                if (adj[v][i] && (visited[i] === -1)) stack.push(i);
            }
        }
    }
}

//bfs
function bfs (v) {
    var queue = [];
    queue.push(v);
    while (queue.length) {
        v = queue.shift();
        if (visited[v] === false) {
            visited[v] = true;
            //console.log(v);
            for (var i = 0; i < n; i++) {//n은 정점의 개수

                if (adj[v][i] && (visited[i] === -1)) queue.push(i);
            }
        }
    }
}