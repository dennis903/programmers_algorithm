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