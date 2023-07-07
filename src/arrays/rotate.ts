// https://leetcode.com/problems/rotate-array/description/

const nums: number[] = [1,2,3,4,5,6,7]
let k: number = 3

function rotate(nums: number[], k: number): void {
    k %= nums.length;
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length-1);
}

function reverse(nums: number[], start: number, end: number) {
    let temp
    while(end>start){
        temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

rotate(nums, k)
console.log(nums)
