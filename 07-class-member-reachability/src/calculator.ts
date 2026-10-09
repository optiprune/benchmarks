export class Calculator {
  add(a: number, b: number) { return a + b; }
  private normalize(value: number) { return Math.round(value); }
}
export class NeverUsed {
  run() { return 'dead'; }
}
