# 2021.12.07
# 문제 1. 음양 더하기
## 해결 방법
1. absolutes 배열을 끝까지 돈다.
2. 만약 sign[index]가 true면 answer에 더하고 false이면 -1을 요소에 곱한 다음 더한다.
## 코드
```
function solution(absolutes, signs) {
    var answer = 0;

    absolutes.forEach((ele, index) => {
        answer += signs[index] ? ele : ele * -1;
    })
    return answer;
}
```
# 문제 2. 내적
## 해결 방법
1. a 배열을 forEach문으로 돌면서 각 요소에 상응하는 b의 요소와 곱한 뒤 리턴할 변수에 더한다.
## 코드
```
function solution(a, b) {
    var answer = 0;
    a.forEach((ele, index) => {
        answer += (ele * b[index]);
    })
    return answer;
}
```