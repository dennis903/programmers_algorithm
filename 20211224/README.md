# 2021.12.24
# 문제 1. 기능개발
## 해결 방법
1. topIndex를 설정한다. 이 변수는 가장 앞에 있는 기능을 의미한다.
2. topIndex를 progresses의 length만큼 루프를 돌린다.
    + 첫번째, topIndex의 배열 요소가 100이 될때까지 각 배열 요소에 speeds만큼 더한다.
    + 두번째, topIndex의 배열이 100이 됬으면 그 뒤에 배열중에 순서대로 100이 넘는 값이 있는지 센다.
    + 만약 100이 넘지 않은 값이 있으면 그 배열 요소의 인덱스를 topIndex로 재설정한다.
    + 두번째에서 센 값을 answer에 push한다.
## 코드
```
function solution(progresses, speeds) {
    var answer = [];
    
    for (let topIndex = 0; topIndex < progresses.length; topIndex++)
    {
        let count = 0;
        while (progresses[topIndex] < 100)
        {
            progresses = progresses.map((ele, index) => {
                return (ele + speeds[index]);
            })
        }
        let j = topIndex;
        while (j < progresses.length)
        {
            if (progresses[j] < 100)
                break ;
            count++;
            j++;
        }
        topIndex = j - 1;
        answer.push(count);
    }
    return answer;
}
```