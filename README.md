# 2021.12.02
# 문제 1. 로또의 최저 등수, 최대 등수
![image info](../problem_images/20211202.png)

## 해결 방법
1. lottos와 win_nums를 비교해 서로 공통된 값의 갯수를 구해 minAns변수에 저장한다.
2. lottos의 0의 갯수와 minAns변수의 값을 더해 maxAns변수에 저장한다.
3. Ranks 배열에 [6, 6, 5, 4, 3, 2, 1]을 저장한다. Ranks 배열의 값이 순위가 된다.
4. Ranks 배열의 인덱스와 minAns의 값을 비교하여 같으면 리턴할 배열의 첫번째 값으로 저장한다.
5. Ranks 배열의 인덱스와 maxAns의 값을 비교하여 같으면 리턴할 배열의 두번째 값으로 저장한다.

## 코드
```
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
```

## JavaScript 문법
### Array.filter()
+ 구문

    `arr.filter(callback(element[, index[, array]])[, thisArg])`
+ 매개변수
    - callback: 각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버림
    - element: 처리할 현재 요소.
    - index: 처리할 현재 요소의 인덱스.
    - array: filter를 호출한 배열
    - thisArg: callback을 실행할 때 this로 사용하는 값

# 문제 2. 신규 아이디 추천
![image info](../problem_images/20211202_2.png)

## 해결방법
1. 모든 대문자를 소문자로 치환한다.
 + toLowerCase() 함수를 이용해 해결
2. new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거한다.
 + 새로운 string 변수를 만든다.
 + for 루프를 돌면서 조건에 있는 문자들만 new string에 concat함수로 추가
3. new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환한다.
 + for 루프를 돌면서 마침표를 찾는다.
 + inner 루프를 돌면서 마침표들을 point string에 담는다.
 + replace함수를 써서 new string에 바꾼 string을 담는다.
4. new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
 + 처음과 끝의 인덱스를 변수에 저장하고 slice()함수를 사용해 마침표를 제거한다.
5. new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
 + 문자열의 길이가 0이면 + 연산자를 사용해 a를 붙인다.
6. new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
     만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
 + 문자열의 길이를 확인하고 만약 문자열의 길이가 16 이상이면 end변수에 15를 대입한다.
 + 만약 end 인덱스에 값이 '.'이면 end를 14로 바꾼다.
7. new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

## 코드
```
function step1(new_id)
{
    new_id = new_id.toLowerCase();
    return (new_id);
}

function step2(new_id)
{
    let new_str = '';
    let acceptedStr = "-_.";
    for (let i = 0; i < new_id.length; i++)
    {
        if (new_id[i] >= 'a' && new_id[i] <= 'z')
            new_str = new_str.concat(new_id[i]);
        else if (new_id[i] >= '0' && new_id[i] <= '9')
            new_str = new_str.concat(new_id[i]);
        else if (acceptedStr.indexOf(new_id[i]) !== -1)
            new_str = new_str.concat(new_id[i]);
    }
    
    return (new_str);
}

function step3(new_id)
{
    let start_idx = 0;
    let point_str = "";
    let new_str = new_id;
    
    for (let i = 0; i < new_id.length; i++)
    {
        if (new_id[i] === '.')
        {
            start_idx = i;
            while (new_id[i] === '.' || i === new_id.length)
                i++;
            point_str = new_id.slice(start_idx, i);
            new_str = new_str.replace(point_str, ".");
            
            start_idx = 0;
        }
    }
    return (new_str);
}

function step4(new_id)
{
    let begin = 0;
    let end = new_id.length;
    let i = 0;
    
    
    while (new_id[i] == '.')
    {
        i++;
        begin++;
    }
    i = new_id.length - 1;
    while (new_id[i] == '.')
    {
        i--;
        end--;
    }
    return (new_id.slice(begin, end));
}

function step5(new_id)
{
    if (new_id.length === 0)
        new_id = new_id + 'a';
    return (new_id);
}

function step6(new_id)
{
    let end = 0;

    if (new_id.length >= 16)
    {
        if (new_id[14] === '.')
            end = 14;
        else
            end = 15;
        new_id = new_id.slice(0, end);
    }
    return (new_id);
}

function step7(new_id)
{
    
    if (new_id.length <= 2)
    {
        while (new_id.length < 3)
            new_id = new_id + new_id[new_id.length - 1];
    }
    
    return (new_id);
}

function solution(new_id) {
    var answer = '';
    
    answer = step7(step6(step5(step4(step3(step2(step1(new_id)))))));
    return answer;
}
```