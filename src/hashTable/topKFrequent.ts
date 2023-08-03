function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  const result = Array.from(map).sort((elem, elem2) => elem2[1] - elem[1]);
  console.log(result)
  let ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(result[i][0])
  }
  return ans;
}
