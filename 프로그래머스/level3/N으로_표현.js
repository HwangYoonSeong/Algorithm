//1~8개의 갯수로 가능한 연산은 이전에 계산한 값들의 연산임을 이용 
// ex) 3개로 가능한 연산은 1개와 2개, 2개와 1개로 연산한 것, 
//     그리고 숫자 3개로만 사용한 것(555)과 동일

// 빈 set와 연산 시 아무 값도 저장되지 않음 
// ex) s[0] (=s{})과 연산 시 추가되는 값 없음 
function solution (N, number) {
    const s = [new Set()];
    for (let i = 1; i <= 8; i++) {
        s.push(new Set([new Array(i).fill(N).join('') * 1]))
        //join이 문자열을 반환하므로
        // *1로 숫자로 변환한 뒤 다시 []로 감싸주고 있다. 

        for (let j = 1; j <= i; j++) {
            for (const x1 of [...s[j]]) { //전개 연산자
                for (const x2 of [...s[i - j]]) {
                    s[i].add(x1 + x2)
                    s[i].add(x1 - x2)
                    s[i].add(x2 - x1) // 뺄샘의 교환법칙이 성립하지 않음을 고려 
                    s[i].add(x1 * x2)
                    if (x2) { s[i].add(Math.floor(x1 / x2)) }
                }
            }
        }

        if (s[i].has(number)) {
            return i
        }
    }
    return -1
}
console.log(solution(5, 3));
