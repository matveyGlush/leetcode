function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, Array<string>>();
  let toFind;
  for (const str of strs) {
    toFind = str.split('').sort().join('');
    if (map.has(toFind)) {
      map.get(toFind).push(str);
    } else map.set(toFind, [str]);
  }
  return Array.from(map.values());
}
