const nums: number[] = [1,1,0,1,1,1]

function findMaxConsecutiveOnes(nums: number[]): number {
    let ans: number = 0
    let currMax: number = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) currMax += 1
        else currMax = 0
        if (currMax > ans) ans = currMax
    }
    return ans
}

console.log(findMaxConsecutiveOnes(nums))
