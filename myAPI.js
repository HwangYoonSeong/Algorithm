//2차원 배열 생성
const arr2 = Array.from(Array(9), () => Array(9).fill(0))
arr2[0][0] = 2;

showMatrix(arr2);
function showMatrix (arr) {
    arr.forEach((el) => {
        var temp = [];
        el.forEach((i) => {
            temp.push(i);
        })
        console.log(temp.join(' '));
    })
}


//2중 for문 
for (var i = 2; i < 3; i++) {

    for (var j = 2; j < 3; j++) {

    }
}

//++4중 for문
for (var k = 2; k < 3; k++) {

    for (var l = 2; l < 3; l++) {

    }
}

//최대공약수
function gcd (a, b) {
    return a % b ? gcd(b, a % b) : b
}