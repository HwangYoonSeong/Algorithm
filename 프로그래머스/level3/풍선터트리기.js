// 내 코드: 시간 초과 
// function solution(a) {
//     var answer = a.length;
//    var left = [];
//    var right = [];

//    for (var i = 0; i < a.length; i++) {
//        left = a.slice(0, i);
//        right = a.slice(i + 1);



//        if (left.length !== 0 && right.length !== 0) {
//            var lmin = left.reduce((a, b) => {
//                return a > b ? b : a;
//            })
//            var rmin = right.reduce((a, b) => {
//                return a > b ? b : a;
//            })
//            if (a[i] > lmin && a[i] > rmin) answer--;

//        }

//    }


//    return answer;
// }

function solution (a) {
    var answer = 0;
    var left = a[0];
    var right = new Array(a.length);
    var min = 1000001;

    for (var i = a.length - 1; i > 0; i--) {
        if (a[i] < min) {
            min = a[i];
        }

        right[i] = min;
    }

    var answer = a.length < 2 ? 1 : 2;

    for (var j = 1; j < a.length - 1; j++) {
        if (left > a[j]) {
            left = a[j];
        }
        if (left < a[j] && right[j] < a[j]) continue;
        answer++;

    }


    return answer;
}

console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33]));


