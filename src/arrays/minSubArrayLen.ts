const target: number = 7
const nums: number[] = [2,3,1,2,4,3]

function minSubArrayLen(target: number, nums: number[]): number {
    let ans: number = Infinity
    let left: number = 0
    let curr: number = 0
    for (let right = 0; right < nums.length; right++) {
        curr += nums[right]
        while (curr >= target) {
            if (ans > right - left + 1) ans = right - left + 1
            curr -= nums[left]
            left++
        }
    }
    return ans === Infinity ? 0 : ans
}

console.log(minSubArrayLen(target, nums))
