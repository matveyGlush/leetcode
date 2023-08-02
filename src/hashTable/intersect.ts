function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map<number,number>();
  for (const number of nums1) {
    if (map.has(number)) map.set(number, map.get(number) + 1);
    else map.set(number, 1);
  }
  const ans: Array<number> = [];
  for (const number of nums2) {
    if (map.has(number) && map.get(number) > 0) {
      ans.push(number);
      map.set(number, map.get(number) - 1);
    }
  }
  return ans;
}
