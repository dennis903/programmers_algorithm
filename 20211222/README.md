# 2021.12.21
# 문제 1. 멀쩡한 사각형
## 해결 방법
1. 직사각형의 대각선이 가로지르는 사각형들의 패턴은 일정하다.
    + w와 h의 최대공약수인 GCD(w, h)번 만큼 반복.
2. 대각선이 지나는 길은 1~2칸 존재할 수 있다.
3. 세로줄 기준 최소 한칸을 차지한다.
4. 가로줄 기준 2칸을 차지하는 경우는 w / gcd - 1
5. 최종식 : w * h - [ { ( w / gcd ) + ( h / gcd ) - 1 } * gcd ]
## 코드
```
function solution(w, h) {
    let long = w > h ? w : h;
    let short = w > h ? h : w;
    let g = short;
    
    while (long % short !== 0)
    {
        g = long % short;
        long = short;
        short = g;
    }
    return (w * h - (w + h - g));
}
```