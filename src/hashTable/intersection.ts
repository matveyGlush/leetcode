function intersection(nums1: number[], nums2: number[]): number[] {
  const set = new Set<number>;
  const ansSet = new Set<number>;
  for (const num of nums1) {
    set.add(num);
  }
  for (const num of nums2) {
    if (set.has(num)) ansSet.add(num);
  }
  return Array.from(ansSet);
}
