// 재귀형식으로 풀이 >> 실패 
// function solution (clothes) {
//     var answer = 0;
//     var type = new Set();

//     var temp = [];

//     clothes.forEach((el) => {
//         type.add(el[1]);
//     })
//     type = Array.from(type);
//     var count = type.length;

//     while (count > 0) {
//         temp = [];
//         temp.push(type.shift());
//         type.push(temp);
//         count--;
//     }

//     for (var i = 0; i < clothes.length; i++) {

//         for (var j = 0; j < type.length; j++) {
//             if (clothes[i][1] === type[j][0]) {
//                 type[j].push(clothes[i][0]);
//             }
//         }
//     }

//     //var idx = ["0", "1", "2", "3"];
//     var idx = [];
//     type.forEach((el, i) => {
//         idx.push(String(i));
//     })

//     var conv = idx.slice();
//     for (var i = 0; i < idx.length; i++) {
//         convination(i, conv[i], idx.length);
//     }

//     function convination (idx, n, idxlen) {

//         for (var j = idx + 1; j < idxlen; j++) {
//             conv.push(n.concat(conv[j]));
//             convination(j, n.concat(conv[j]), idxlen);
//         }

//     }

//     // console.log(conv);
//     // console.log(type);

//     for (var i = 0; i < conv.length; i++) {
//         var res = 0;
//         for (var j = 0; j < conv[i].length; j++) {
//             if (j === 0) res += (type[conv[i][j]].length - 1);
//             else {
//                 res *= (type[conv[i][j]].length - 1);
//             }

//         }

//         answer += res;
//     }


//     return answer;
// }

function solution (clothes) {
    var answer = 0;
    var type = new Set();

    var temp = [];

    clothes.forEach((el) => {
        type.add(el[1]);
    })
    type = Array.from(type);
    var count = type.length;

    while (count > 0) {
        temp = [];
        temp.push(type.shift());
        type.push(temp);
        count--;
    }

    for (var i = 0; i < clothes.length; i++) {

        for (var j = 0; j < type.length; j++) {
            if (clothes[i][1] === type[j][0]) {
                type[j].push(clothes[i][0]);
            }
        }
    }

    console.log(type);
    answer = 1;
    type.forEach((el) => {
        answer *= el.length
    })
    return answer - 1;
}


console.log(solution([["a", "aa"],
["b", "aa"],
["c", "aa"],
["a_a", "bb"],
["b_b", "bb"],
["c_c", "bb"],
["aaa", "cc"],
["bbb", "cc"],
["ccc", "cc"]]));