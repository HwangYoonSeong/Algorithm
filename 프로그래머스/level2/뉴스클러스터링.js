
function divideStr (str) {
    var pattern_eng = /[a-z]/;	// 문자 
    var dividedStr = [];
    for (var i = 0; i < str.length - 1; i++) {
        if ((pattern_eng.test(str[i])) && (pattern_eng.test(str[i + 1])))
            dividedStr.push(str.slice(i, i + 2).join(''))
    }

    return dividedStr;
}

// const union = (str1, str2) => {
//     var first = str1.length < str2.length ? [...str2] : [...str1];
//     var second = str1.length < str2.length ? [...str1] : [...str2];

//     const union = [...first];
//     second.forEach((value) => { if (!union.includes(value)) union.push(value); })
//     // 없을 때에만 추가 해준다. (합집합 중복 방지)
//     return union;
// }

const intersect = function (first, str2) {
    var second = [...str2]
    return first.filter(value => {

        if (second.includes(value)) {
            second.splice(second.indexOf(value), 1);
            return true;
        }
    }); // 둘 다 있으면 교집합

}




function solution (str1, str2) {
    var answer = 0;
    str1 = str1.toLowerCase().split('');
    str2 = str2.toLowerCase().split('');

    str1 = divideStr(str1);
    str2 = divideStr(str2);

    if ((str1.length === 0) && (str2.length === 0)) answer = 65536;
    else {
        var Intersection = intersect(str1, str2);
        var Union = str1.concat(str2);
        Intersection.forEach(el => {
            Union.splice(Union.indexOf(el), 1);
        })

        console.log(Intersection);
        console.log(Union);


        answer = Math.floor(Intersection.length / Union.length * 65536);

    }


    return answer;
}

console.log(solution('aabbcab', 'abbde'));
