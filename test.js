const s = [new Set()];
for (let i = 1; i <= 3; i++) {
  s.push(new Set([new Array(i).fill(5).join('') * 1]))
  //join이 문자열을 반환하므로
  // *1로 숫자로 변환한 뒤 다시 []로 감싸주고 있다. 

  for (let j = 1; j <= i; j++) {
    for (const x1 of [...s[j]]) { //전개 연산자
      for (const x2 of [...s[i - j]]) {
        s[i].add(x1 + x2)
        s[i].add(x1 - x2)
        s[i].add(x1 * x2)
        if (x2) { s[i].add(Math.floor(x1 / x2)) }
      }
    }
  }
}
console.log(s);
