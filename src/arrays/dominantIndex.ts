let nums: number[] = [3,6,1,0]

function dominantIndex(nums: number[]): number {
    let max: number = 0;
    let secondMax: number = 0;
    let isFound: boolean = false
    let changed: boolean = true
    let ans: number = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            secondMax = max
            max = nums[i]
            changed = true
        } else if (nums[i] > secondMax) secondMax = nums[i]

        if (secondMax * 2 <= max && changed) {
            isFound = true
            ans = i
            changed = false
        } else if (max < secondMax * 2) isFound = false
    }
    if (isFound) return ans
    return -1
}

console.log(dominantIndex(nums))
