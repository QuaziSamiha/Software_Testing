// import { test, expect } from "vitest";
import { it, expect } from "vitest";
import { add } from "./math";

// test();
it("should return the corrent sum if an array of number is provided", () => {
  const result = add([1, 2, 3]);
  expect(result).toBe(6);
});
