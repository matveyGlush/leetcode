function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  const map = new Map<number, number>();
  for (const num3 of nums3)
    for (const num4 of nums4)
      map.set(num4+num3, (map.get(num4+num3) || 0) + 1);
  let count = 0;
  for (const num1 of nums1)
    for (const num2 of nums2)
      count += map.get(-(num1+num2)) || 0;
  return count;
}
