function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let ans = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    if (set.has(s[right])) {
      if (left < right) {
        set.delete(s[left])
        left++;
        continue;
      } else {
        right++
        continue;
      }
    } else {
      if (right - left + 1 > ans) ans = right - left + 1
    }
    set.add(s[right])
    right++;
  }
  return ans;
}
