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
                    dupRoutes.push(j);
                    count++;
                }
            }
            dupRoutesList.push(dupRoutes);
            dup.push(count);
        }

        var maxDupIdx = dup.indexOf(Math.max.apply(null, dup));
        answer = answer - dupRoutesList[maxDupIdx].length + 1;//중복된 구간의 묶음이므로 +1
        var willRemove = [];
        dupRoutesList[maxDupIdx].forEach(el => {
            willRemove.push(routes[el]);
        })

        willRemove.forEach(el => {
            routes.splice(routes.indexOf(el), 1);
        })
    }


    while (routes.length !== 0) {
        setCamera(routes);
    }

    return answer;
}

console.log(solution([[-20, 15], [-14, -5], [-18, -13], [-5, -3]]));