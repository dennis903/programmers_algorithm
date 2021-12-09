# 2021.12.09
# 문제 1. 모의고사
## 해결 방법
1. 10000개의 인덱스를 가진 배열 3개를 선언한다.
2. 규칙에 맞게 3개의 배열에 값을 채운다.
3. answers의 length만큼 루프를 돌면서 3개의 배열과 answers의 정답이 맞는지 체크한다.
4. correct배열에 3개의 배열 각각 맞는 갯수를 추가한다.
5. correct배열의 max값과 3개의 배열의 맞은 갯수를 비교해 max와 같으면 return할 배열에 번호를 집어 넣는다.
6. return할 배열을 정렬한 뒤 리턴한다.
## 코드
```
function generateArr2(i)
{
    if (i % 2 === 0)
        return (2);
    else if (i % 8 === 7)
        return (5);
    else if (i % 8 === 5)
        return (4);
    else if (i % 8 === 3)
        return (3);
    else
        return (1);
}

function generateArr3(i)
{
    if (i % 10 >= 0 && i % 10 <= 1)
        return (3);
    else if (i % 10 >= 2 && i % 10 <= 3)
        return (1);
    else if (i % 10 >= 4 && i % 10 <= 5)
        return (2);
    else if (i % 10 >= 6 && i % 10 <= 7)
        return (4);
    else (i % 10 >= 8 && i % 10 <= 9)
        return (5);
}

function generateArray()
{
    let arr = [[], [], []];
        
    for (let i = 0; i < 10000; i++)
    {
        arr[0][i] = i % 5 + 1;
        arr[1][i] = generateArr2(i);
        arr[2][i] = generateArr3(i);
    }
    return (arr);
}

function solution(answers) {
    var answer = [];
    let supo = generateArray();
    let max = 0;
    let correct = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++)
    {
        if (supo[0][i] === answers[i])
            correct[0]++;
        if (supo[1][i] === answers[i])
            correct[1]++;
        if (supo[2][i] === answers[i])
            correct[2]++;
    }
    max = Math.max(...correct);
    correct.map ((ele, idx) => {
        if (ele === max)
            answer.push(idx + 1);
    });
    return answer.sort((a, b) => a - b);
}
```

# 문제 2. 체육복
## 해결 방법
1. students 배열을 선언한다.
2. n번 만큼 루프를 돌면서 여분의 채육복이 있으면 2, 없으면 0, 한벌만 있으면 1로 초기화 한다.
3. 만약 체육복이 없으면 앞에 인덱스의 값이 2인지 확인하고 그게 아니라면 뒤에 인덱스의 값이 2 인지 확인한다. 반드시 얖 인덱스부터 비교해야한다. 왜냐햐면 뒤에 인덱스부터 검사할 시 앞 번호 뒷 번호 둘 다 여벌의 옷이 있을 때 최댓값이 나오지 않기 때문이다.

## 코드
```
function solution(n, lost, reserve) {
    var answer = 0;
    let students = [];
    
    for (let i = 0; i < n; i++)
    {
        if (lost.includes(i + 1) && !reserve.includes(i + 1))
            students[i] = 0;
        else if (reserve.includes(i + 1) && !lost.includes(i + 1))
            students[i] = 2;
        else
            students[i] = 1;
    }
    students.map((ele, index) => {
        if (students[index] === 1 || students[index] === 2)
            answer++
        if (students[index] === 0)
        {
            if (students[index - 1] === 2)
            {
                answer++;
                students[index - 1]--;
            }
            else if (students[index + 1] === 2)
            {
                answer++;
                students[index + 1]--;
            }  
        
        }
    })
    return answer;
}
```

# 문제 3. 폰켓몬
## 해결 방법
1. 매개변수로 받은 nums 배열을 정렬한다.
2. 폰켓몬의 갯수 / 2 를 한 만큼의 포켓몬을 선택할 수 있기 때문에 numLength변수에 nums.length / 2를 저장한다.
3. nums[0]을 start로 정한다.
4. nums.filter 메서드를 사용해 start와 다르면 true를 리턴해 새로운 배열을 만든다.
5. 만약 새로운 배열의 길이가 numLength의 값보다 크면 numLength를 리턴하고 아니면 새로운 배열의 길이를 리턴한다.
## 코드
```
function solution(nums) {
    var answer = 0;
    let numLength = nums.length / 2;
    let start = 0;
    
    nums.sort((a, b) => a - b);
    start = nums[0];
    nums = nums.filter((value, index) => {
        if (index === 0)
            return true;
        if (start !== value)
        {
            start = value;
            return true;
        }
    })
    return (nums.length > numLength ? numLength : nums.length);
}
```