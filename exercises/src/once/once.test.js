import { expect, it, describe } from "vitest";

import { once } from "./once.js";

describe("once", () => {
  it("should return 6 the first time and undefined the second time", () => {
    const onceFn = once((a, b, c) => a + b + c);

    expect(onceFn([1, 2, 3])).toBe(6);
    expect(onceFn([2, 3, 4])).toBeUndefined();
  });

  it("should return 140 the first time and undefined the second time", () => {
    const onceFn = once((a, b, c) => a * b * c);

    expect(onceFn([5, 7, 4])).toBe(140);
    expect(onceFn([2, 3, 4])).toBeUndefined();
  });
});
