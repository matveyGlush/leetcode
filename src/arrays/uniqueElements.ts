// (removeDuplicates) https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
function uniqueElements(nums: number[]): number {
    let i: number = nums.length > 0 ? 1 : 0;
    for (const n of nums)
        if (n > nums[i-1])
            nums[i++] = n;
    return i;
}

console.log(uniqueElements([0,0,1,1,1,2,2,3,3,4]))
