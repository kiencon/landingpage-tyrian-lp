export class RecentIdTTL {
  private cap: number;
  private ttlMs: number;
  private q: Array<{ id: string; t: number }> = [];
  private s = new Map<string, number>(); // id -> timestamp

  constructor(capacity = 100, ttlMs = 10 * 60 * 1000) {
    this.cap = capacity;
    this.ttlMs = ttlMs;
  }

  private sweep(now = Date.now()) {
    while (this.q.length) {
      const { id, t } = this.q[0];
      if (now - t > this.ttlMs || this.q.length > this.cap) {
        this.q.shift();
        this.s.delete(id);
      } else break;
    }
  }

  add(id: string): boolean {
    if (!id) return false;
    const now = Date.now();
    this.sweep(now);
    if (this.s.has(id)) return false;

    this.q.push({ id, t: now });
    this.s.set(id, now);
    this.sweep(now);
    return true;
  }

  has(id: string): boolean {
    this.sweep(Date.now());
    return this.s.has(id);
  }
}
