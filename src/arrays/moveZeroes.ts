const nums: number[] = [0]

function moveZeroes(nums: number[]): void {
    let curr: number
    let temp: number
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            curr = i
            while (curr < nums.length - 1 && nums[curr] === 0) {
                curr++
            }
            temp = nums[i]
            nums[i] = nums[curr]
            nums[curr] = temp
        }
    }
}
moveZeroes(nums)
console.log(nums)
