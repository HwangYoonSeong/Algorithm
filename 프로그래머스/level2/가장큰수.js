// function solution (numbers) {
//     var answer = '';
//     var firstlist = [];
//     numbers.forEach((el) => {
//         if (String(el).length > 1) {
//             firstlist.push(String(el).split("")[0]);
//         } else firstlist.push(String(el));
//     })
//     //console.log(first);
//     var first = Math.max.apply(null, firstlist);

//     var list = [];
//     var idx = [];

//     idx.push(numbers.indexOf(first));
//     permu(String(first), idx, numbers.length);


//     function permu (n, idx, numlen) {
//         if (idx.length === numlen) return;
//         for (var j = 0; j < numlen; j++) {

//             var dup = false;
//             for (var k = 0; k < idx.length; k++) {
//                 if (j === idx[k]) dup = true;
//             }
//             if (dup) continue;//중복되는 idx의 경우 해당 i는 continue
//             if (idx.length === (numlen - 1)) list.push(n.concat(numbers[j]));
//             idx.push(j);
//             permu(n.concat(numbers[j]), idx, numlen);
//             idx.pop();

//         }

//     }

//     //console.log(list);
//     answer = String(Math.max.apply(null, list));
//     return answer;
// }



// console.log(solution([3, 30, 34, 5, 9]));


function solution (numbers) {

    var answer = numbers.map(c => c + '').
        sort((a, b) => (b + a) - (a + b)).join('');
    // ex) 문자열인 경우 '30'+'3'= '303' '3'+'30'= '330'이므로 비교 가능 

    return answer[0] === '0' ? '0' : answer;
}



console.log(solution([3, 30, 34, 5, 9]));