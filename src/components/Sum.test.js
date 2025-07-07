import { sum } from "./Sum";

describe("sum", () => {
  it("should return the sum of two numbers", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
  });
  it("should return the same number when adding 0", () => {
    expect(sum(5, 0)).toBe(5);
    expect(sum(0, 10)).toBe(10);
  });
  it("should return 0 when both numbers are 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
  it("should handle negative numbers", () => {
    expect(sum(-5, -5)).toBe(-10);
    expect(sum(-3, 3)).toBe(0);
  });
});
