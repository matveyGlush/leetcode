class RandomizedSet {
  private readonly set: Set<number>
  constructor() {
    this.set = new Set<number>();
  }

  insert(val: number): boolean {
    if (this.set.has(val)) return false;
    this.set.add(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.set.has(val)) return false;
    this.set.delete(val);
    return true;
  }

  getRandom(): number {
    return Array.from(this.set)[Math.floor(Math.random()*this.set.size)]
  }
}
