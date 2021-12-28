function solution(s)
{
    let strArr = s.split('');
    let tempArr = [];
    
    strArr.map(ele => {
        ele === tempArr[tempArr.length - 1] ? tempArr.pop() : tempArr.push(ele)
    })
    return (tempArr.length === 0 ? 1 : 0);
}