let nums: number[] = [3,3]
let val: number = 3

function removeElement(nums: number[], val: number): number {
    if (nums.length === 1 && nums[0] === val) {
        nums.pop()
        return 0
    }
    let k: number = 0
    let flag: boolean
    let end: number = nums.length - 1
    for (let i = 0; i < nums.length && i < end + 1; i++) {
        if (nums[i] === val) {
            flag = true
            while (flag && i < end) {
                if (nums[end] !== val) {
                    [nums[i], nums[end]] = [nums[end], nums[i]]
                    flag = false
                }
                end--
            }
        }
        if (nums[i] !== val) k++
    }
    return k
}

console.log(removeElement(nums, val))
