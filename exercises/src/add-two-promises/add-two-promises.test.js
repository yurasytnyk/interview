import { expect, it, describe } from "vitest";

import { addTwoPromises } from "./add-two-promises.js";

describe("addTwoPromises", () => {
  it("should return 7", async () => {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

    expect(await addTwoPromises(promise1, promise2)).toBe(7);
  });

  it("should return -2", async () => {
    const promise1 = new Promise((resolve) =>
      setTimeout(() => resolve(10), 50)
    );
    const promise2 = new Promise((resolve) =>
      setTimeout(() => resolve(-12), 30)
    );

    expect(await addTwoPromises(promise1, promise2)).toBe(-2);
  });
});
