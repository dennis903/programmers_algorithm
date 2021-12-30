function findMin(a, b, min)
{
    min = a < min ? a : min;
    return min = b < min ? b : min;
}

function rotateArr(x1, y1, x2, y2, arr)
{
    let min = 10001;
    for (let i = y2; i > y1; i--)
    {
        [arr[x1][i], arr[x1][i - 1]] = [arr[x1][i - 1], arr[x1][i]];
        min = findMin(arr[x1][i], arr[x2][i - 1], min);
    }
    for (let i = x1; i < x2; i++)
    {
        [arr[i][y1], arr[i + 1][y1]] = [arr[i + 1][y1], arr[i][y1]];
        min = findMin(arr[i][y1], arr[i + 1][y1], min);
    }
    for (let i = y1; i < y2; i++)
    {
        [arr[x2][i], arr[x2][i + 1]] = [arr[x2][i + 1], arr[x2][i]];
        min = findMin(arr[x2][i], arr[x2][i + 1], min);
    }
    for (let i = x2; i > x1 + 1; i--)
    {
        [arr[i][y2], arr[i - 1][y2]] = [arr[i - 1][y2], arr[i][y2]];
        min = findMin(arr[i][y2], arr[i - 1][y2], min);
    }
    return min;
}

function solution(rows, columns, queries) {
    var answer = [];
    let value = 1;
    let arr = new Array(rows);
    for (let i = 0; i < rows; i++)
        arr[i] = new Array(columns);
    for (let i = 0; i < rows; i++)
        for (let j = 0; j < columns; j++)
            arr[i][j] = value++;
    for (let i = 0; i < queries.length; i++)
    {
        let x1 = queries[i][0] - 1;
        let y1 = queries[i][1] - 1;
        let x2 = queries[i][2] - 1;
        let y2 = queries[i][3] - 1;
        answer.push(rotateArr(x1, y1, x2, y2, arr));
    }
    return answer;
}