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