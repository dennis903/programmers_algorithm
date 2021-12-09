function generateArr2(i)
{
    if (i % 2 === 0)
        return (2);
    else if (i % 8 === 7)
        return (5);
    else if (i % 8 === 5)
        return (4);
    else if (i % 8 === 3)
        return (3);
    else
        return (1);
}

function generateArr3(i)
{
    if (i % 10 >= 0 && i % 10 <= 1)
        return (3);
    else if (i % 10 >= 2 && i % 10 <= 3)
        return (1);
    else if (i % 10 >= 4 && i % 10 <= 5)
        return (2);
    else if (i % 10 >= 6 && i % 10 <= 7)
        return (4);
    else (i % 10 >= 8 && i % 10 <= 9)
        return (5);
}

function generateArray()
{
    let arr = [[], [], []];
        
    for (let i = 0; i < 10000; i++)
    {
        arr[0][i] = i % 5 + 1;
        arr[1][i] = generateArr2(i);
        arr[2][i] = generateArr3(i);
    }
    return (arr);
}

function solution(answers) {
    var answer = [];
    let supo = generateArray();
    let max = 0;
    let correct = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++)
    {
        if (supo[0][i] === answers[i])
            correct[0]++;
        if (supo[1][i] === answers[i])
            correct[1]++;
        if (supo[2][i] === answers[i])
            correct[2]++;
    }
    max = Math.max(...correct);
    correct.map ((ele, idx) => {
        if (ele === max)
            answer.push(idx + 1);
    });
    return answer.sort((a, b) => a - b);
}