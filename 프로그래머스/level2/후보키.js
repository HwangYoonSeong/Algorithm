function solution (relation) {
    var answer = 0;
    var Trelation = [];

    for (var i = 0; i < relation[0].length; i++) {
        var temp = [];
        for (var j = 0; j < relation.length; j++) {
            temp.push(relation[j][i]);
        }
        Trelation.push(temp);
    }

    console.log(Trelation);
    var dupKey = [];
    for (var i = 0; i < Trelation.length; i++) {
        var setRelation = Array.from(new Set(Trelation[i]));
        if (setRelation.length === Trelation[i].length) answer++;
        else {
            dupKey.push(i);
        }

    }

    console.log(dupKey);
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

    for (var i = 2; i <= dupKey.length; i++) {
        getCombinations(dupKey, i).forEach(el => {

        })

    }
    return answer;
}


//모범 답안 
function solution2 (relation) {
    const cols = relation[0].length;

    const check = 1 << cols;
    console.log(check);
    const answer = new Set();

    for (let i = 0; i < check; i++) {
        let temp = relation.map(x => x.filter((_, col) => i & (1 << col)).join(""));
        //console.log(temp);
        const set = new Set(temp);
        if (temp.length === set.size) answer.add(i); //유일성 검사 
    }

    for (let x of answer) {
        for (let y of answer) {

            if (x >= y) continue;
            if ((x & y) === x) answer.delete(y); //최소성 검사
        }
    }

    return answer.size;
}
console.log(solution2([["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "1"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]]));
