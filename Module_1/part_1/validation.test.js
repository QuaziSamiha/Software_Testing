import { it, expect } from "vitest";
import { validateEmail, validateArrayNotEmpty } from "./validation";

it("should validate a correct email address", () => {
  const email = "example@mail.com";
  const resultFn = () => validateEmail(email);
  expect(resultFn).not.toThrow();
});

it("should throw an error if an invalid email address is provided", () => {
  const email = "example";
  const resultFn = () => validateEmail(email);
  expect(resultFn).toThrow();
});

it("should throw an error if an empty string is passed", () => {
  const email = "";
  const resultFn = () => validateEmail(email);
  expect(resultFn).toThrow();
});

it("throws an error for a null email address", () => {
  expect(() => validateEmail(null)).toThrow("Invalid email address.");
});

it("throws an error for an undefined email address", () => {
  expect(() => validateEmail(undefined)).toThrow("Invalid email address.");
});

it("should validate a non-empty array", () => {
  const array = [2, 5];
  const resultFn = () => validateArrayNotEmpty(array);
  expect(resultFn).not.toThrow();
});
