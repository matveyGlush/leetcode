function firstUniqChar(s: string): number {
  const map = new Map<string, number>();
  for (const sElement of s) {
    if (map.has(sElement)) map.set(sElement, map.get(sElement) + 1);
    else map.set(sElement, 1);
  }

  for (const elem of map) {
    if (elem[1] === 1) {
      return s.indexOf(elem[0]);
    }
  }
  return -1;
}
