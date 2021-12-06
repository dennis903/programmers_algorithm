function solution(numbers) {
    var answer = 0;
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    nums = nums.filter(e => !numbers.includes(e));
    nums.forEach(e => {
        answer += e;
    })
    return answer;
}