let nums = [2,1,-1]

function pivotIndex(nums: number[]): number {
    let totalSum: number = 0
    let leftSum: number = 0

    for (let i = 0; i < nums.length; i++) totalSum += nums[i]

    for (let count = 0; count < nums.length; count++) {
        if (leftSum == (totalSum - leftSum - nums[count])) return count
        leftSum += nums[count]
    }

    return -1
}

console.log(pivotIndex(nums))
