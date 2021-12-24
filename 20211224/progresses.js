function solution(progresses, speeds) {
    var answer = [];
    
    for (let topIndex = 0; topIndex < progresses.length; topIndex++)
    {
        let count = 0;
        while (progresses[topIndex] < 100)
        {
            progresses = progresses.map((ele, index) => {
                return (ele + speeds[index]);
            })
        }
        let j = topIndex;
        while (j < progresses.length)
        {
            if (progresses[j] < 100)
                break ;
            count++;
            j++;
        }
        topIndex = j - 1;
        answer.push(count);
    }
    return answer;
}