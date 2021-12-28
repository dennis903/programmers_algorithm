# 2021.12.27
# 문제 1. 타겟 넘버
## 해결 방법
1. DFS문제이다.
2. dfs함수에 인자를 depth와 sum을 넘겨준다.
    + 만약 depth가 numbers배열의 길이와 같다면 sum과 타겟의 값을 비교하고 리턴한다.
3. dfs함수에 인자인 depth에 1 더하고 sum에 numbers[depth]만큼 더한 뒤에 dfs함수를 재귀호출한다.
4. dfs함수에 인자인 depth에 1 더하고 sum에 numbers[depth]만큼 뺀 뒤에 dfs함수를 재귀호출한다.

## 코드
```
function solution(numbers, target) {
    var answer = 0;

    function dfs (depth, sum)
    {
        if (depth === numbers.length)
        {
            if (sum === target)
                answer++;
            return ;
        }
        dfs(depth + 1, sum + (numbers[depth] * 1));
        dfs(depth + 1, sum + (numbers[depth] * -1));
    }
    dfs (0, 0, 1);
    return answer;
}
```