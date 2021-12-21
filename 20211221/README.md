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


# Javascript 정보
### 객체의 속성 추가, 삭제
1. 객체의 속성 추가

    + 객체를 먼저 생성 후, 속성을 추후에 추가하기
    + Dot Notation, Bracket Notation으로 표기
```
    let obj = {};        // obj 빈 객체 선언

console.log(obj);    // { } = 빈 객체 출력

// 1. Dot Notation 표기법
obj.name = 'miyoni';   // 'name' key에 'miyoni'라는 value 추가
obj.age = 20;          // 'age' key에 20이라는 value 추가
obj.add = 'Incheon';   // 'add' key에 'Incheon'라는 value 추가

// 2. Bracket Notation 표기법
obj['name'] = 'miyoni';
obj['age'] = 20;
obj['add'] = 'Incheon';

// 3. 변수를 새로 할당하여 Bracket Notation 표기법으로 추가하기
let name2 = 'name';
let age2 = 'age';
let add2 = 'add';

obj[name2] = 'miyoni';
obj[age2] = 20;
obj[add2] = 'Incheon';

console.log(obj);  // { add: "Incheon", age: 20, name: "miyoni" }
```

2. 객체의 속성 삭체

    delete 객체명.속성명

    delete 객체명[속성명]
```
let obj = { add: "Incheon", age: 20, name: "miyoni" }; 

// 1. Dot Notation 표기법
delete obj.add;    // 객체의 add 속성 (key, value) 모두 삭제

console.log(obj);  // { age: 20, name: "miyoni" }

// 2. Bracket Notation 표기법
delete obj['age']; // 객체의 age 속성 (key, value) 모두 삭제

console.log(obj);  // { name: "miyoni" }

// 3. 변수를 새로 할당하여 Bracket Notation 표기법으로 추가
let name2 = 'name';
delete obj[name2]; // 객체의 name 속성 (key, value) 모두 삭제

console.log(obj);  // {}
```