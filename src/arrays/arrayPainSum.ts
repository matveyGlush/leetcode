const nums: number[] = [1,4,3,2]

function arrayPairSum(nums: number[]): number {
    let result: number = 0
    nums.sort((a,b) =>  a - b)
    for (let i = 1; i < nums.length; i += 2) {
        result += Math.min(nums[i-1], nums[i])
    }
    return result
}

console.log(arrayPairSum(nums))
