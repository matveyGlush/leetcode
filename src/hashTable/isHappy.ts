function isHappy(n: number): boolean {
  const inLoop = new Set<number>();
  let squareSum, remain;
  while (!inLoop.has(n)) {
    inLoop.add(n)
    squareSum = 0;
    while (n > 0) {
      remain = Math.floor(n%10);
      squareSum += remain*remain;
      n = Math.floor(n / 10);
    }
    if (squareSum == 1)
      return true;
    else
      n = squareSum;
  }
  return false;
}

console.log(isHappy(19))
