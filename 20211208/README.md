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

