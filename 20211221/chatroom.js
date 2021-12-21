function solution(record) {
    var answer = [];
    let users = {};

    record = record.map(ele => ele.split(' '));
    record.map(ele => {
        if (ele[0] !== 'Leave')
            users[ele[1]] = ele[2];
    })
    record.map(ele => {
        if (ele[0] === 'Enter')
            answer.push(users[ele[1]] + "님이 들어왔습니다.");
        else if (ele[0] === 'Leave')
            answer.push(users[ele[1]] + "님이 나갔습니다.");
    })
    return answer;
}