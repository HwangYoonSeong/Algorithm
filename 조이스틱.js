// function solution (name) {
//     var answer = 0;
//     var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//     var Rcount = 0;
//     var Lcount = 0;
//     var updown = [];
//     var leftRight = 0;
//     var notA;
//     var i = 0;
//     while (i < name.length) {
//         //console.log(alphabet);
//         Rcount = 0;
//         Lcount = 1;
//         notA = "";
//         for (var j = i + 1; j < name.length; j++) {
//             if (name[j] == 'A') Rcount++;
//             else {
//                 Rcount++;
//                 notA = j;
//                 break;
//             }
//         }
//         if (!notA) {//모두 A인 경우 
//             Rcount = 0;
//         } else {
//             if (Rcount > 1) { //Rcount가 1일 경우 왼쪽 방향을 고려할 필요 X 
//                 Lcount = name.length - j + i
//             }

//         }

//         leftRight += (Rcount < Lcount ? Rcount : Lcount);


//         i = j;
//     }

//     for (var i = 0; i < name.length; i++) {


//         if (alphabet.indexOf(name[i]) > 13) {
//             updown.push(alphabet.reverse().indexOf(name[i]) + 1);
//             alphabet.reverse();
//         } else {
//             updown.push(alphabet.indexOf(name[i]));

//         }

//     }

//     // console.log(leftRight);
//     // console.log(updown);
//     var sum = updown.reduce((a, b) => a + b, 0);
//     answer = sum + leftRight;
//     return answer;
// }

// console.log(solution("AABAAAAAAABBB"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//조이스틱으로 알파벳 이름을 완성하세요.
//1. 맨 처음엔 A로만 이루어져 있습니다. ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA
//2. 알파벳은 대문자로만 이루어져 있습니다.
//3. 위로 A -> B -> C 이 순서대로 다음 알파뱃으로 이동한다.
//4. 아래오 A -> Z 이 순서대로 다음 알파뱃으로 이동한다
//5. 왼쪽으로 첫번쨰 위치에서 왼쪽으로 이동하면 마지막 문자에 커서
//6. 오른쪽으로 이동 다음 문자로 이동

//A -> Z 순서로 이동하는게 빠를지?
//Z -> A 순서로 이동하는게 빠를지  
//계산한다음에 이동한다.
//다음 문자열로 이동한다.
//모든 문자열을 알맞게 바꾸었을때 조이스틱 조작 횟수를 리턴한다.
//AAZ AAAAZ ZAAZ AAZZAZ 
// ABCDEFGHIJKLMNOPQRSTUVWXYZ

function basicformat (n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push("A");
    }
    return result;
}
function alphaMove (letter) {
    if (!letter) {
        return;
    }
    let index = letter.charCodeAt() - 64; //아스키코드 값으로 바꾼다/ A = 1, Z = 26
    //A -> Z 로 가는게 빠를지 Z -> A로 가는 게 빠를지 어떻게 판단하면 될까?
    if (index > 13) {
        return 26 - index + 1
    } else {
        return index - 1;
    }
}

//가장 가까운 a값을 찾는 것..
function leftright (name, index) {
    let left = 1;
    let right = 1;
    let rightindex = index;
    let leftindex = index;
    while (true) {
        rightindex++;
        if (rightindex === name.length) {
            rightindex = 0;
        }
        if (name[rightindex] !== 'A') {
            break;
        }
        else {
            right++;
        }
    }
    while (true) {
        leftindex--;
        if (leftindex < 0) {
            leftindex = name.length - 1;
        }
        if (name[leftindex] !== 'A') {
            break;
        }
        else {
            left++;
        }
    }
    if (left === right) {
        return [right, rightindex];
    }
    return left > right ? [right, rightindex] : [left, leftindex];
}

function solution (name) {
    //A초기상태를 먼저 가져온다..
    let basic = basicformat(name.length);
    let result = 0; //결과값 넣을 곳
    //복사한 name 값을 만든다
    let cpname = name;
    //가장 가까운 a 값을 찾는다...
    let updown = name.split("").map(element => alphaMove(element))
    updown = updown.reduce((acc, cur) => (acc + cur), 0);
    //while 문을 돌린다. cpname 을 전부 AAAAA로 바꿀떄까지 맞춘다
    cpname = cpname.split("");
    cpname[0] = "A";
    let nowindex = 0;
    while (cpname.join("") !== basic.join("")) {
        //방향설정을 먼저한다.
        let [count, index] = leftright(cpname, nowindex);
        result += count;
        cpname[index] = 'A';
        nowindex = index;
    }
    return result + updown;
}
