function solution1 (genres, plays) {
    var answer = [];
    var gSet = Array.from(new Set(genres));
    //var gCount = Array.from({ length: gSet.length }, () => 0);
    var gCount = new Array(gSet.length).fill(0);
    var album = [];

    for (var i = 0; i < genres.length; i++) {//해쉬화
        var temp = [];
        temp.push(genres[i]);
        temp.push(plays[[i]]);
        temp.push(i);
        album.push(temp);
    }

    album.sort((a, b) => {//각 장르 조회수 기준 정렬
        return b[1] - a[1];
    });


    for (var k = 0; k < gSet.length; k++) { //각 장르의 총합 
        for (var j = 0; j < album.length; j++) {
            if (gSet[k] === album[j][0]) {
                gCount[k] += album[j][1];
            }
        }

    }
    for (var i = 0; i < gSet.length; i++) {//총합 해쉬화
        var temp = [];
        temp.push(gSet[i]);
        temp.push(gCount[[i]]);
        gSet[i] = temp;
    }

    gSet.sort((a, b) => {//총합 기준 정렬
        return b[1] - a[1];
    });

    for (var i = 0; i < gSet.length; i++) {
        var count = 0;
        for (var j = 0; j < album.length; j++) {
            if (gSet[i][0] === album[j][0]) {
                if (count < 2) {
                    answer.push(album[j][2]);
                    count++;
                } else break;

            }
        }

    }

    //console.log(gSet);
    return answer;
}

//hash 이용
function solution2 (genres, plays) {
    var answer = [];
    var hash = {};
    var gp = [];

    for (var i = 0; i < genres.length; i++) {
        if (!hash[genres[i]]) hash[genres[i]] = 0;
        hash[genres[i]] += plays[i];
    }

    let sortobj = [];
    for (let i in hash) {
        sortobj.push([i, hash[i]]);
    }
    sortobj.sort(function (a, b) {
        return b[1] - a[1];
    });

    for (var i = 0; i < genres.length; i++) {
        gp.push([i, genres[i], plays[i]]);
    }
    gp.sort(function (a, b) {
        return b[2] - a[2];
    });
    for (var i of sortobj) {
        var temp = gp.filter(el => el[1] === i[0])
        if (temp.length === 1) {
            answer.push(temp[0][0])
        } else {
            answer.push(temp[0][0])
            answer.push(temp[1][0])
        }

    }

    return answer;
}
console.log(solution2(["classic", "classic", "classic", "classic", "pop"], [500, 150, 800, 800, 2500]));

