import { expect, it, describe } from "vitest";

import { romanToInteger } from "./roman-to-integer.js";

describe("romanToInteger", () => {
  it("should return 3 for III", () => {
    expect(romanToInteger("III")).toBe(3);
  });

  it("should return 58 for LVIII", () => {
    expect(romanToInteger("LVIII")).toBe(58);
  });

  it("should return 1994 for MCMXCIV", () => {
    expect(romanToInteger("MCMXCIV")).toBe(1994);
  });

  it("should return 1996 for MCMXCVI", () => {
    expect(romanToInteger("MCMXCVI")).toBe(1996);
  });
});
