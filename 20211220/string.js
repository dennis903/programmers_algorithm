function solution(s) {
    var answer = 1001;
    if (s.length === 1 || s.length === 2)
        return (s.length);
    for (let i = 1; i <= s.length / 2; i++) // 자를 갯수
    {
        let length = s.length;
        for (let j = 0; j < s.length; j++) // 현재 인덱스
        {
            let count = 0;
            for (let k = j + i; k <= s.length; k += i)
            {
                if (s.slice(j, j + i) === s.slice(k, k + i))
                    count++;
                else
                {
                    length -= count * i;
                    count++;
                    length += count > 1 ? count.toString().length : 0;
                    j = k - 1;
                    break ;
                }
            }
        }
        if (answer > length)
            answer = length;
    }
    return answer;
}