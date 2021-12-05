# 2021.12.05
# 문제 1. 숫자 문자열과 영단어

## 해결 방법
1. zero부터 nine까지 담고 있는 배열을 만든다.
2. 배열의 인덱스를 하나씩 돌면서 매개변수로 받은 문자열 안에 배열의 값이 있는지 없는지 체크한 후 있다면 배열의 인덱스로 바꾼다.
3. 문자열을 숫자로 바꾼다.

## 코드
```
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
```
# 문제 2. 키패드 누르기

## 해결 방법
1. numbers 배열을 하나씩 검사하면서 만약 1, 4, 7이면 L을 문자열에 집어놓고 3, 6, 9이면 R을 문자열에 집어 넣는다.
2. 만약 둘 다 아닌 2, 5, 8, 0이 들어오면 현재 왼손, 오른손의 위치와 입력할 numbers 사이의 거리를 구한 뒤 서로 비교하여 더 가까운 손을 문자열에 집어넣는다.

## 코드
```
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
```