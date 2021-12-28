# 2021.12.28
# 문제 1. 짝지어 제거하기
## 해결 방법
1. 문자열의 요소를 tempArr에 push한다.
    + 만약 현재 문자열의 요소와 tempArr에 있는 마지막 요소와 값이 같다면 tempArr의 요소를 pop한다.
2. 만약 tempArr의 길이가 0이면 1을 리턴하고 아니면 0을 리턴한다.
## 코드
```
function solution(s)
{
    let strArr = s.split('');
    let tempArr = [];
    
    strArr.map(ele => {
        ele === tempArr[tempArr.length - 1] ? tempArr.pop() : tempArr.push(ele)
    })
    return (tempArr.length === 0 ? 1 : 0);
}
```