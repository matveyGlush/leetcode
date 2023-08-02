function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>;
  for (let i = 0; i < nums.length; i++) {
    const found: number | undefined = map.get(target - nums[i]);
    if (found !== undefined) return [found, i]
    map.set(nums[i], i);
  }
  return [-1,-1]
}

console.log(twoSum([2,7,11,15],9))
