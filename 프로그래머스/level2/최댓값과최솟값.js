function solution (s) {
    var answer = '';
    s = s.split(" ");
    s = s.map((el) => el * 1);


    var max = Math.max.apply(null, s);
    var min = Math.min.apply(null, s);


    answer = String(min) + " " + String(max);

    return answer;
}

console.log(solution("1 2 3 4"))