// https://leetcode.com/problems/subarray-product-less-than-k/description/

function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k <= 1) return 0

    let ans: number = 0
    let left: number = 0
    let curr: number = 1

    for (let right = 0; right < nums.length; right++) {
        curr *= nums[right]
        while (curr >= k) {
            curr /= nums[left]
            left++
        }
        ans += right - left + 1
    }
    return ans
}
