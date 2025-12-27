import { it, test, expect } from "vitest";
import { add } from "./math";

// * ====== TEST CASE - 1 ========
// * ====== CALCULATION TEST ========
// ? ============= F1:v1 ============
it("It should return the correct sum if an array of number is provided", () => {
  const numbers = [1, 2, 3]; // ? arrange
  const expectedResult = numbers.reduce((acc, current) => acc + current);
  const result = add(numbers); // ? actions
  expect(result).toBe(expectedResult); // ? assertion
});

//? =============== F1:v1-v2 ===============
// it("should return the correct sum if an array of number is provided", () => {
//   const numbers = add([1, 2, 3]); // ? arrange
//   expect(result).toBe(6); // ? assertion
// });

//? =============== F1:v1-v1 ===============
// test("should return the correct sum if an array of number is provided", () => {
//   const numbers = add([1, 2, 3]); // ? arrange
//   expect(result).toBe(6); // ? assertion
// });

// * ====== TEST CASE - 2 ========
// *  ====== INVALID INPUT TEST =======
// ? ============= F2:v1 ============
it("It should provide NaN if at least one invalid number is provided", () => {
  const numbers = [1, "meow", 3]; // ? arrange
  const result = add(numbers); // ? actions
  expect(result).toBeNaN(); // ? assertion
});

// * ====== TEST CASE - 3 ========
// * ======= NUMERIC STRING TEST =======
// ? ============= F3:v1 ============
it("It should provide correct sum if an array of numeric string is provided", () => {
  const numbers = ["1", "2", "3"]; // ? arrange
  const expectedResult = numbers.reduce((acc, current) => +acc + +current);
  const result = add(numbers); // ? actions
  expect(result).toBe(expectedResult); // ? assertion
});

// * ====== TEST CASE - 4 ========
// * ======== FOR NO ARGUMENT =======
// ? ============= F4:v1-v2 ============
it("It should through an error if no argument is passed", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow();
});

// ? ============= F4:v1-v1 ============
// it("It should through an error if no argument is passed", () => {
//   try {
//     const result = add();
//   } catch (error) {
//     expect(error).toBeDefined();
//   }
// });

// * ====== TEST CASE - 5 ========
//* ======== FOR MULTIPLE ARGUMENT =====
// ? ============= F5:v1 ============
it("It should through an error if multiple argument is passed", () => {
  const resultFn = () => {
    add(1, 2, 3);
  };
  expect(resultFn).toThrow(/is not iterable/i);
});

// ? =============F5:v1-v1 ============
// it("It should through an error if multiple argument is passed", () => {
//   const resultFn = () => {
//     add(1, 2, 3);
//   };
//   expect(resultFn).toThrow();
// });
