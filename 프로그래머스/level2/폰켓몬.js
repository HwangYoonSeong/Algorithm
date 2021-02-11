function solution (nums) {
    var answer = 0;
    var pickNum = nums.length / 2;
    var numSet = Array.from(new Set(nums));

    if (numSet.length >= pickNum) answer = pickNum;
    else {
        answer = numSet.length;
    }
    return answer;
}

console.log(solution([3, 3, 3]));