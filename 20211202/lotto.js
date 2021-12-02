function findMin(lottos, win_nums)
{
    let count = 0;

    for (let i = 0; i < lottos.length; i++)
    {
        for (let j = 0; j < win_nums.length; j++)
        {
            if (lottos[i] === win_nums[j])
                  count++;
                
        }
    }
    return (count);
}

function findMax(lottos, minAns)
{
    let count = 0;

    for (let i = 0; i < lottos.length; i++)
    {
        if (lottos[i] === 0)
            count++;
    }

    return (Math.abs(minAns + count));
}

function solution(lottos, win_nums) {
    var answer = [];
    var ranks = [6, 6, 5, 4, 3, 2, 1];
    var minAns = findMin(lottos, win_nums);
    var maxAns = findMax(lottos, minAns);
    
    console.log("minAns", minAns);
    console.log("maxAns", maxAns);
    
    var minRank = ranks.filter(function(ele, index) {
        if (index === minAns)
            return (true);
        return (false);
    });
    var maxRank = ranks.filter(function(ele, index) {
        if (index === maxAns)
            return (true);
        return (false)
    });
    answer[0] = maxRank[0];
    answer[1] = minRank[0];
    return answer;
}