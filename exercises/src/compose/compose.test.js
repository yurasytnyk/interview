import { expect, it, describe } from "vitest";

import { compose } from "./compose.js";

describe("compose", () => {
  it("should return 65", () => {
    const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
    expect(compose(functions)(4)).toBe(65);
  });

  it("should return 1000", () => {
    const functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
    expect(compose(functions)(1)).toBe(1000);
  });

  it("should return 42", () => {
    expect(compose([])(42)).toBe(42);
  });
});
