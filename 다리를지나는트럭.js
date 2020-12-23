function solution (bridge_length, weight, truck_weights) {
    var answer = 0;
    var onBridge = [];
    var time = [];
    do {//truck이 다 지나갈 때까지
        answer++;
        if (onBridge.length) {
            time = time.map((n) => { return n + 1 });//시간경과 
        }
        if (time[0] > bridge_length) {
            onBridge.shift();
            time.shift();
        }
        if (onBridge.reduce((acc, curr) => acc + curr, 0) + truck_weights[0] <= weight) {
            time.push(1);
            onBridge.push(truck_weights.shift());
        }


    } while (onBridge.length)



    return answer;
}

var bridge_length = 100;
var weight = 100;
var truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

console.log(solution(bridge_length, weight, truck_weights));