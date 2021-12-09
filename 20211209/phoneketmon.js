function solution(nums) {
    var answer = 0;
    let numLength = nums.length / 2;
    let start = 0;
    
    nums.sort((a, b) => a - b);
    start = nums[0];
    nums = nums.filter((value, index) => {
        if (index === 0)
            return true;
        if (start !== value)
        {
            start = value;
            return true;
        }
    })
    return (nums.length > numLength ? numLength : nums.length);
}