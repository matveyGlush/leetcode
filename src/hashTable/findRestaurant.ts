function findRestaurant(list1: string[], list2: string[]): string[] {
  const map = new Map<string, number>();
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i)
  }
  let sum = Infinity;
  let ans = [];
  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i]) && map.get(list2[i]) + i < sum) {
      ans = [list2[i]]
      sum = map.get(list2[i]) + i;
    } else if (map.get(list2[i]) + i === sum) ans.push(list2[i])
  }
  return ans
}
