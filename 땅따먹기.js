function solution (land) {
    var answer = 0;
    for (var i = 1; i < land.length; i++) {
        for (var j = 0; j < 4; j++) {
            land[i][j] = land[i][j] + Math.max.apply(null, (land[i - 1].filter((el, idx) => idx !== j)));
        }
    }
    answer = Math.max.apply(null, (land[land.length - 1]));
    return answer;
}

console.log(solution([[1, 2, 3, 5], [5, 6, 7, 8], [4, 3, 2, 1]]));


