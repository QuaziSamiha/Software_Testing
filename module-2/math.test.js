import { it, expect } from "vitest";
import { add } from "./math";

it("It should return the corrent sum if an array of number is provided", () => {
  const numbers = [1, 2, 3]; // ? arrange
  const expectedResult = numbers.reduce((acc, current) => acc + current);
  const result = add(numbers); // ? actions
  expect(result).toBe(expectedResult); // ? assertion
});

it("It should provide NaN if at least one invalid number is provided", () => {
  const numbers = [1, "meow", 3]; // ? arrange
  const result = add(numbers); // ? actions
  expect(result).toBeNaN(); // ? assertion
});

it("It should provide correct sum if an array of numeric string is provided", () => {
  const numbers = ["1", "2", "3"]; // ? arrange
  const expectedResult = numbers.reduce((acc, current) => +acc + +current);
  const result = add(numbers); // ? actions
  expect(result).toBe(expectedResult); // ? assertion
});

it("It should through an error if no argument is passed", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
  // ? ============= v3:v1 ============
  // try {
  //   const result = add();
  // } catch (error) {
  //   expect(error).toBeDefined();
  // }
});

it("It should through an error if multiple argument is passed", () => {
  const resultFn = () => {
    add(1, 2, 3);
  };
  expect(resultFn).toThrow(/is not iterable/i);
  // ? ============= v3:v1 ============
  // expect(resultFn).toThrow();
});

// ? ================ v2 ============
// it("should return the corrent sum if an array of number is provided", () => {
//   const numbers = [1, 2, 3]; // ? arrange
//   const expectedResult = numbers.reduce((acc, current) => acc + current);
//   const result = add(numbers); // ? actions
//   expect(result).toBe(expectedResult); // ? assertion
// });

//? =============== v1 ===============
// it("should return the corrent sum if an array of number is provided", () => {
//   const numbers = [1, 2, 3]; // ? arrange
//   const expectedResult = numbers.reduce((acc, current) => acc + current);
//   const result = add(numbers); // ? actions
//   expect(result).toBe(expectedResult); // ? assertion
// });
