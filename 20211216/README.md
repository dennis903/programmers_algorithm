# 2021.12.16
# 문제 1. 예산
## 해결 방법
1. 매개변수로 받은 배열을 정렬한다.
2. budget이 0보다 작을때 까지 돌린다.
3. answer에 1을 더한다.
4. budget을 index의 요소만큼 뺀다.
## 코드
```
function solution(d, budget) {
    var answer = 0;
    
    d.sort((a, b) => a - b);
    for (let i = 0; i < d.length; i++)
    {
        if (budget - d[i] < 0)
            return answer;
        budget -= d[i];
        answer++;
    }
    return answer;
}
```

# 문제 2. 두 개 뽑아서 더하기
## 해결 방법
1. 2중 for문을 돌면서 모든 경우의 수를 조사한다.
2. array.includes(a + b)가 거짓일 경우 배열에 push한다.
## 코드
```
function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length - 1; i++)
    {
        for (let j = i + 1; j < numbers.length; j++)
        {
            if (!answer.includes(numbers[i] + numbers[j]))
                answer.push(numbers[i] + numbers[j]);
        }
    }
    return answer.sort((a, b) => a - b);
}
```

# 문제 3. 윤년
## 해결 방법
1. 12달의 마지막 날짜를 담고있는 배열을 만든다.
2. week배열을 만든다.
3. numOfday에 입력이 들어온 날짜의 날수를 저장한다.
4. 1월 1일이 금요일이므로 날수인 1을 7로 나누었을때 나머지가 1이면 금요일이다. 따라서 날수를 7로 나눈 나머지의 값을 week배열의 인덱스로 사용하여 요일을 추출한다.
```
function solution(a, b) {
    var answer = '';
    const dayOfmonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    let numOfday = 0;
    for (let i = 0; i < a - 1; i++)
        numOfday += dayOfmonth[i];
    numOfday += b;
    answer = week[numOfday % 7];
    return answer;
}
```