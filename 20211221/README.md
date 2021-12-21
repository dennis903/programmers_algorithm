# 2021.12.21
# 문제 1. 오픈채팅방
## 해결 방법.
1. 매개변수로 받은 record배열의 요소들을 공백을 기준으로 split한다. 이 이유는 공백을 기준으로 명령어, 아이디, 닉네임을 구분하기 위해서이다.
2. id부분을 key, nickname부분을 value로 하는 객체를 생성한다.
이렇게 해야 아이디 하나에 하나의 닉네임만 담을 수 있기 때문이다.
3. record를 루프를 돌면서 명령어에 맞는 문자열을 삽입한다.
## 코드
```
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
```