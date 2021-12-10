# 2021.12.10
# 문제 1. 실패율
## 해결 방법
1. 매개변수로 들어온 N번 만큼 루프를 돌린다.
+ index와 value를 가지고 있는 객체를 선언
+ stages.filter 메서드를 사용해 현재 스테이지 보다 큰 수만 골라 다른 배열에 저장한다.
+ 객체 안에 현재 스테이지를 저장하고 실패율을 계산해 value에 저장한다.
+ 객체를 담을 배열안에 객체를 push해준다.
2. 객체를 담은 배열을 value를 기준으로 오름차순으로 정렬한다.
3. map함수를 사용하여 index만 가지고 있는 배열을 리턴한다.
## 코드
```
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
```
# 문제 2. 약수의 개수와 덧셈
## 해결방법
1. left부터 right까지 for 루프를 돌리면서 약수의 갯수를 체크
2. 약수의 갯수가 짝수면 더하고 홀수면 뺀다.
## 코드
```
function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++)
    {
        let num = 0;
        for (let j = 1; j <= i; j++)
            if (i % j === 0)
                num++;
        answer = num % 2 === 0 ? answer + i : answer - i;
    }
    return answer;
}
```
# 문제 3. 3진법 뒤집기
## 해결방법
1. n을 toString(3)을 써서 3진법 문자열로 바꾼다.
2. split메서드를 써서 문자열을 배열로 바꾼다.
3. reverse 메서드를 사용하여 반전시킨다.
4. join을 써서 다시 문자열로 바꾼다.
5. Number.parseInt(str, 3)을 써서 3진법 문자열을 10진법으로 바꾼다.

## 코드
```
function solution(n) {
    return (Number.parseInt(n.toString(3).split("").reverse().join(""), 3));
}
```