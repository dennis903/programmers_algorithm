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