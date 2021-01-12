// 내 코드
// 정답 코드이긴하나 코드가 지저분하다
// function solution (s) {
//     var answer = [];

//     var sList = [];
//     s = s.substr(1);
//     s = s.substr(0, s.length - 1);


//     //console.log(s);
//     var temp = [];
//     var i = 0;
//     while (i < s.length) {
//         if (s[i] === ',') {
//             i++;
//             continue;
//         }
//         if (s[i] === "{") {
//             temp = [];

//             i++;

//             while (s[i] !== "}") {
//                 var str = "";
//                 while (s[i] !== ",") {
//                     if (s[i] === "}") {
//                         temp.push(Number(str));
//                         break;
//                     }
//                     str = str.concat(s[i]);
//                     i++;
//                 }
//                 if (s[i] !== "}") {
//                     temp.push(Number(str));
//                     i++;
//                 }
//             }
//             sList.push(temp);

//         }
//         i++;

//     }
//     sList.sort((a, b) => {
//         return a.length - b.length;
//     });

//     //console.log(sList);
//     var dup = [];
//     for (var i = 0; i < sList.length; i++) {
//         for (var j = 0; j < sList[i].length; j++) {
//             if (i === 0) {
//                 dup.push(sList[i][j]);
//                 //answer.push(sList[i][j]);

//             }
//             else {
//                 dup.forEach((el) => {
//                     if (sList[i][j] === el) {
//                         sList[i][j] = 0;

//                     }

//                 })
//             }
//         }
//         for (var k = 0; k < sList[i].length; k++) {
//             if (sList[i][k] !== 0) {
//                 dup.push(sList[i][k]);
//                 answer.push(sList[i][k]);

//             }
//         }


//     }

//     return answer;
// }

// console.log(solution("{{123}}"));


const solution = (s) => {
    let arr = strToArr(s);
    //console.log(arr);
    arr.sort((a, b) => a.length - b.length);
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < result.length; j++) {
            let index = arr[i].findIndex(v => v === result[j]);
            if (index !== -1) {
                arr[i][index] = -1;
            }
        }
        result.push(arr[i].filter(v => v !== -1)[0])
    }

    return result;
}

const strToArr = (str) => {
    return str.split('},{').map(v => v.replace(/\{|\}/g, "")).map(v => v.split(',').map(v => +v));
}


console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));