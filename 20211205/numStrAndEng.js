function toNumStr(s)
{
    const numArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numArray.forEach(function(ele, index)
                    {
        while (s.includes(ele))
            s = s.replace(ele, index);
    });
    return (s);
}

function solution(s) {
    var answer = 0;
    
    const numStr = toNumStr(s);
    answer = parseInt(numStr);
    return answer;
}