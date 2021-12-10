function solution(N, stages) {
    let playerNum = stages.length;
    let failedPlayer = 0;
    let failureRateArr = [];
    for (let i = 0; i < N; i++)
    {
        let failureRate = {index: 0, value: 0};
        stages = stages.filter(e => e > i + 1);
        failedPlayer = playerNum - stages.length;
        failureRate.index = i + 1;
        failureRate.value = parseFloat(failedPlayer / playerNum);
        failureRateArr.push (failureRate);
        playerNum = stages.length;
    }
    failureRateArr.sort((a, b) => b.value - a.value);
    return (failureRateArr.map(ele => ele.index));
}