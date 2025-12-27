import { test, expect } from "vitest";
import { transformToNumber } from "./transformToNumber";

test("It should return a number if a numeric string is provided", () => {
  const stringNumber = "5";
  const result = transformToNumber(stringNumber);
  // * === MULTIPLE ASSERTIONS ======
  expect(result).toBeTypeOf("number");
  expect(result).not.toBeTypeOf("string");
  expect(isNaN(result)).not.toBe(true);
});
