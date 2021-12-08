function solution(array, commands) {
    var answer = [];
    
    commands.map(e => {
        answer.push(array.slice(e[0] - 1, e[1]).sort((a, b) => a - b)[e[2] - 1]);
    })
    return answer;
}