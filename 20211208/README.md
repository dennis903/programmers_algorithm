# 2021.12.08
# 문제 1. 소수 만들기
## 해결 방법
1. 3중 for문을 돌면서 모든 경우의 수를 체크한다.
2. 만약 세 개의 요소를 더한 값이 소수면 ret변수에 1을 더한다.
## 코드
```
const isPrime = add => {
    for (let i = 2, s = Math.sqrt(add); i <= s; i++)
        if (add % i === 0)
            return false;
    return true;
}

function solution(nums) {
    let ret = 0;
    for (let i = 0; i < nums.length - 2; i++)
    {
        for (let j = i + 1; j < nums.length - 1; j++)
        {
            for (let k = j + 1; k < nums.length; k++)
            {
                let add = nums[i] + nums[j] + nums[k];
                if (isPrime(add))
                    ret++;
            }
        }
    }
    return ret;
}
```
# 문제 2. 완주하지 못한 선수
## 해결 방법
1. participant와 completion을 정렬한다.
2. participant의 요소를 돌면서 만약 completion의 요소와 다르면 answer에 값을 저장하고 리턴한다.

## 코드
```
function solution(participant, completion) {
    let answer = "";
    
    participant.sort();
    completion.sort();
    for (let i = 0; i < participant.length; i++)
    {
        if (participant[i] != completion[i])
        {
            answer = participant[i];
            break ;
        }
    }
    return answer;
}
```

# 문제 3. K번째수
## 해결방법
1. commands 배열을 map 메서드를 사용해서 루프롤 돌린다.
2. array.slice()를 하고 정렬한 뒤 map요소 배열에 마지막 요소를 return 할 배열에 push한다.
## 코드
```
function solution(array, commands) {
    var answer = [];
    
    commands.map(e => {
        answer.push(array.slice(e[0] - 1, e[1]).sort((a, b) => a - b)[e[2] - 1]);
    })
    return answer;
}
``` 

## 주목할 점
자바스크립트의 array.prototype.sort() 메서드는 유니코드를 기준으로 정렬한다.
```
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

```
보기와 같이 정수를 정렬할 때 정수의 값을 문자로 바꾸어 정렬하기 때문에 정수를 정렬할 때 원하는 정렬을 할 수 없다.

따라서 정수를 정렬하고 싶을땐 sort() 메서드에서 compareFunction을 사용해야 한다.

위의 코드에서 정수를 정렬하고 싶을 때 `array.sort((a, b) => a - b)`로 바꿔야 올바르게 정렬된다. compareFunction에서 리턴값이 음수가 나오면 왼편의 수가 더 작은 것으로 판단하고 정렬이 이루어진다.