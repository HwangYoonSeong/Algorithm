//시간초과
function solution (routes) {
    var answer = routes.length;

    function setCamera (routes) {
        var start = [];
        var end = [];
        var dup = [];
        routes.forEach((el) => {
            start.push(el[0]);
            end.push(el[1]);
        })

        var minStart = Math.min.apply(null, start);
        var maxEnd = Math.max.apply(null, end);
        var dupRoutesList = [];
        for (var i = minStart; i <= maxEnd; i++) {
            var count = 0;
            var dupRoutes = [];
            for (var j = 0; j < routes.length; j++) {
                if ((routes[j][0] <= i) && (i <= routes[j][1])) {
                    dupRoutes.push(routes[j]);
                    count++;
                }
            }
            dupRoutesList.push(dupRoutes);
            dup.push(count);
        }

        var maxDupIdx = dup.indexOf(Math.max.apply(null, dup));
        answer = answer - dupRoutesList[maxDupIdx].length + 1;//중복된 구간의 묶음이므로 +1

        dupRoutesList[maxDupIdx].forEach(el => {
            routes.splice(routes.indexOf(el), 1);
        })
    }


    while (routes.length !== 0) {
        setCamera(routes);
    }

    return answer;
}

//모범답안
const solution2 = (routes) => {
    let answer = 0;
    routes.sort((a, b) => {
        return a[1] - b[1]; // 각 차량의 마지막 지점 기준 오름차순 
    });
    console.log(routes);
    let camera = -30001;
    for (let i = 0; i < routes.length; i++) {
        if (camera < routes[i][0]) { // 처음 지점이 이전 카메라 위치보다 작을 경우 이미 해당 차량은 카메라를 지난다.
            answer++;
            camera = routes[i][1]; // 따라서 카메라 위치보다 클 경우에만 해당 차량의 종료위치에 카메라를 설치한다. 
            // 이는 차량이 카메라를 지날 수 있는 마지막 위치이다.(최대의 위치)
        }
    }
    return answer;
};
console.log(solution2([[-20, 15], [-14, -5], [-18, -13], [-5, -3]]));