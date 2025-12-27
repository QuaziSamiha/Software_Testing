import { it, expect } from "vitest";
import { stringLength } from "./stringLength";

// * ======= TEST CASE 1 (SINGLE TEST MULTIPLE ASSERTIONS) =======
it("returns correct length for non-empty string", () => {
  expect(stringLength("hello")).toBe(5);
  expect(stringLength("world")).toBe(5);
  expect(stringLength("hello world")).toBe(11);
});

// * ======= TEST CASE 2 (SINGLE TEST SINGLE ASSERTION) =======
it("returns for empty string", () => {
  expect(stringLength("")).toBe(0);
});

// * ======= TEST CASE 3 (SINGLE TEST MULTIPLE ASSERTIONS) =======
it("throws error for non-string input", () => {
  expect(() => stringLength(null)).toThrow();
  expect(() => stringLength(undefined)).toThrow();
  expect(stringLength(125)).toBeUndefined();
});
