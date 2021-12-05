function findIndex (ele)
{
    let keyboard = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [-1, 0, -2]
    ];
    for (let i = 0; i < keyboard.length; i++)
    {
        for (let j = 0; j <keyboard[i].length; j++)
        {
            if (keyboard[i][j] === ele)
                return ([i, j]);
        }
    }
    return (null);
}

function findDist(loc, ele)
{
    let eleIndex = findIndex(ele);
    let locIndex = findIndex(loc);
    return (Math.abs(eleIndex[0] - locIndex[0]) + Math.abs(eleIndex[1] - locIndex[1]));
}

function solution(numbers, hand) {
    var answer = '';

    let leftHand = {
        btn: [1, 4, 7],
        loc: -1,
        dist: 0
    };
    let rightHand = {
        btn: [3, 6, 9],
        loc: -2,
        dist: 0
    };
    numbers.forEach(ele => {
        if (leftHand.btn.includes(ele))
        {
            answer += 'L';
            leftHand.loc = ele;
        }
        else if (rightHand.btn.includes(ele))
        {
            answer += 'R';
            rightHand.loc = ele;
        }
        else
        {
            leftHand.dist = findDist(leftHand.loc, ele);
            rightHand.dist = findDist(rightHand.loc, ele);
            if (leftHand.dist > rightHand.dist)
            {
                rightHand.loc = ele;
                answer += 'R';
            }     
            else if (leftHand.dist < rightHand.dist)
            {
                leftHand.loc = ele;
                answer += 'L';
            }
            else
            {
                if (hand === 'right')
                {
                    rightHand.loc = ele;
                    answer += 'R';
                }
                else
                {
                    leftHand.loc = ele;
                    answer += 'L';
                }
            }
        }
    })
    return answer;
}