function singleNumber(nums: number[]) {
  const set = new Set<number>;
  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num);
      continue;
    }
    set.add(num);
  }
  return set.values().next().value;
}
singleNumber([2,2,1])
