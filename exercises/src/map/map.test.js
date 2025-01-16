import { expect, it, describe } from "vitest";

import { map } from "./map.js";

describe("map", () => {
  it("should return [2,3,4]", () => {
    const plusone = (n) => n + 1;

    expect(map([1, 2, 3], plusone)).toEqual([2, 3, 4]);
  });

  it("should return [1,3,5]", () => {
    const plusI = (n, i) => n + i; 

    expect(map([1,2,3], plusI)).toEqual([1,3,5]);
  });

  it('should return [42,42,42]', () => {
    const constant = () => 42;

    expect(map([10,20,30], constant)).toEqual([42,42,42]);
  });
});
