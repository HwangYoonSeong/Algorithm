function isUpper (char) {

    if (char.match(/^[A-Z]$/) != null) {
        return 'upper';
    } else if (char.match(/^[a-z]$/) != null) {
        return 'lower';
    } else return 'number';
}
function solution (s) {

    s = s.split(' ');
    var wordList = [];
    s.map(el => {
        wordList.push(el.split(''));
    })


    for (var i = 0; i < wordList.length; i++) {
        for (var j = 0; j < wordList[i].length; j++) {
            if (j === 0) {
                if (isUpper(wordList[i][j]) === 'lower') wordList[i].splice(0, 1, wordList[i][j].toUpperCase());
                else continue;
            } else {
                if (isUpper(wordList[i][j]) === 'upper') wordList[i].splice(j, 1, wordList[i][j].toLowerCase());
                else continue;
            }
        }
    }

    console.log(s);
    wordList = wordList.map(el => el = el.join('')).join(' ');

    return wordList;
}

/////////////////////////////////////모범 답안////////////////////////////////////////
function solution2 (s) {
    //s.split(" ").map(v => console.log(v.substring(1)));
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}
console.log(solution2("3people unFollowed me"));


