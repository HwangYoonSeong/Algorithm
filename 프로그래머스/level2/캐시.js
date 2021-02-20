function solution (cacheSize, cities) {
    if (cacheSize == 0) return cities.length * 5; //캐시크기가 0인 경우 전부 실행시간이 5이기 때문에 반환
    for (var i = 0; i < cities.length; i++) {
        cities[i] = cities[i].toLowerCase();
    }
    console.log(cities);
    var answer = 5;
    var cache = cities.splice(0, 1);
    console.log(cache)
    for (var i = 0; i < cities.length; i++) {
        if (cache.indexOf(cities[i]) !== -1) {
            answer++;

            cache.splice(cache.indexOf(cities[i]), 1);
        } else {
            answer += 5;
            if (cache.length === cacheSize)
                cache.shift();
        }

        cache.push(cities[i]);
    }

    return answer;
}

console.log(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']))