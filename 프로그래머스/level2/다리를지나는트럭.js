function solution (bridge_length, weight, truck_weights) {
    var answer = 0;
    var onBridge = [];
    var time = [];
    do {//truck이 다 지나갈 때까지
        answer++;//시간의 경과 
        if (onBridge.length) {
            time = time.map((n) => { return n + 1 });//시간경과 반영 
        }
        if (time[0] > bridge_length) { //undefined와 크기 비교 연산 가능 
            onBridge.shift();
            time.shift();
        }
        //다리를 지나는 트럭에 다음 트럭이 올라와도 괜찮은지 여부 
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

