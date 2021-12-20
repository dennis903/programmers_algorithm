# 2021.12.20
# 문제 1. 문자열 압축
## 해결 방법
1. 변수 i가 length / 2가 될 때 까지 루프를 돌린다.
2. i만큼 문자열을 자른다.
3. j는 현재 문자열의 인덱스를 가리킨다.
4. j부터 i만큼 문자열을 잘라 비교한다.
+ 만약 자른 문자열과 비교할 문자열이 같으면 count를 늘린다.
+ 비교할 문자열과 자른 문자열이 다르면 이전에 카운트했던 문자열 만큼 압축하고 j를 달라진 인덱스로 재설정한다.
## 코드
```
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
```
