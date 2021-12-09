const isPrime = add => {
    for (let i = 2, s = Math.sqrt(add); i <= s; i++)
        if (add % i === 0)
            return false;
    return true;
}

function solution(nums) {
    let ret = 0;
    for (let i = 0; i < nums.length - 2; i++)
    {
        for (let j = i + 1; j < nums.length - 1; j++)
        {
            for (let k = j + 1; k < nums.length; k++)
            {
                let add = nums[i] + nums[j] + nums[k];
                if (isPrime(add))
                    ret++;
            }
        }
    }
    return ret;
}