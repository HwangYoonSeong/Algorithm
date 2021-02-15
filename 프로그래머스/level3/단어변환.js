function makeAdj (words) {
    const adj = Array.from(Array(words.length), () => Array(words.length).fill(0))

    for (var i = 0; i < words.length; i++) {

        for (var j = 0; j < words.length; j++) {
            if (i === j) {
                adj[i][j] = 0;
                continue;
            }
            var count = 0;
            for (var k = 0; k < words[i].length; k++) {
                if (words[i][k] !== words[j][k]) count++;
            }

            if (count === 1) adj[i][j] = 1;

        }
    }

    return adj;
}

function solution2 (begin, target, words) {
    var answer = 0;
    if (words.indexOf(target) !== -1) {
        var adj = makeAdj(words);
        console.log(adj);
        var startVertex = [];
        for (var j = 0; j < words.length; j++) {
            var count = 0;
            for (var k = 0; k < words[j].length; k++) {
                if (begin[k] !== words[j][k]) count++;
            }

            if (count === 1) startVertex.push(words[j])

        }

        console.log(startVertex);
        var dList = [];
        for (var i = 0; i < startVertex.length; i++) {
            var distance = bfs(adj, words.indexOf(startVertex[i]), words.length);
            //console.log(distance);
            dList.push(distance[words.indexOf(target)])

        }
        console.log(dList);
        answer = Math.min.apply(null, dList) + 1
    }
    return answer;
}

function solution (begin, target, words) {
    if (!words.includes(target)) return 0;
    let answer = 0;
    const visited = new Set();
    let temp = [];
    const queue = [];

    // root 노드를 추가한다.
    queue.push(begin);

    while (queue.length) {
        // 현재 단어를 꺼낸다.
        const word = queue.shift();
        // 방문한 단어 리스트에 현재 단어를 추가한다.
        visited.add(word);

        // 현재 단어가 target과 일치한다면 현재의 레벨을 return
        if (word === target) {
            return answer;
        }

        // 현재 단어와 하나의 알파벳만 다른 단어들을 임시 배열에 넣어준다.
        for (let i = 0; i < word.length; i++) {
            const letter = slicedWord(word, i);
            const matched = words.filter((v, j) => !visited.has(v) && slicedWord(v, i) === letter);
            temp.push(...matched);
        }

        // queue가 비었다는 것은 해당 레벨의 모든 단어를 확인했다는 것이므로 다음 레벨의 단어들을 queue에 넣어준다.
        if (queue.length < 1) {
            answer++;
            queue.push(...temp);
            temp = [];
        }
    }

    // 하나의 알파벳을 제외하고 나머지 단어가 일치하는지 확인하는 함수
    function slicedWord (word, i) {
        const wordToArray = word.split('');
        wordToArray.splice(i, 1);
        return wordToArray.join('');
    }
    return answer;
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))