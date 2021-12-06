# 2021.12.06
# 문제 1. 크레인 인형뽑기 게임

## 해결 방법
1. Stack 클래스를 만든다. 이 Stack은 각각의 인형뽑기 라인의 숫자를 넣을 것이다.
2. 인형을 뽑은 뒤 담아 놓을 상자가 필요하므로 temp stack을 선언한다.
3. moves의 배열을 돌면서 n번 Stack의 가장 위에 있는 값과 temp stack의 가장 위에 있는 값과 비교한다. 만약에 두 개의 값이 똑같다면 n번 Stack과 temp stack의 최상단 값들을 pop한다. 그리고 나서 리턴할 변수에 2를 더한다.
4. 만약 두 개의 값이 다르다면 n번 Stack의 값을 pop하고 그 값을 temp stack에 push한다.

## 코드
```
class Stack {
    constructor() {
       this.arr = [];
    }
    push(item) {
        this.arr.push(item);
    }
    pop() {
       return this.arr.pop();
    }
    peek() {
        return this.arr[this.arr.length - 1]; 
    }
    length() {
        return this.arr.length; 
    }
}

function generateNewStack(board)
{
    let line = [];

    for (let i = 0; i < board.length; i++)
    {
        line[i] = new Stack();
        for (let j = board.length - 1; j >= 0; j--)
        {
            if (board[j][i] !== 0)
                line[i].push(board[j][i]);
        }
    }
    return (line);
}

function solution(board, moves) {
    var answer = 0;

    let lines = generateNewStack(board);
    let tempStack = new Stack();
    moves.forEach(ele => {
        if (lines[ele - 1].length() !== 0)
        {
            let temp = lines[ele - 1].pop();
            if (tempStack.peek() === temp)
            {
                answer += 2;
                tempStack.pop();
            }
            else
                tempStack.push(temp);
        }
    })
    return answer;
}
```

# 문제 2. 없는 숫자 더하기
## 해결 방법
1. numbers에 없는 번호를 추출하기 위한 배열 nums를 선언한다.
2. nums 배열 안에는 0 ~ 9까지의 번호가 있다.
3. nums.filter와 numbers.includes를 사용해서 없는 번호를 추출한다.
4. filter method로 추출된 없는 숫자 목록을 forEach 함수를 통해 더한 뒤 리턴한다.

## 코드
```
function solution(numbers) {
    var answer = 0;
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    nums = nums.filter(e => !numbers.includes(e));
    nums.forEach(e => {
        answer += e;
    })
    return answer;
}
```