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
    // step5(new_id);
    // step6(new_id);
    // step7(new_id);
    return answer;
}