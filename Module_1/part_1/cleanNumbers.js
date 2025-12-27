import { transformToNumber } from "./transformToNumber";

function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error("Input must not be empty");
  }
}

function validateNumber(number) {
  if (isNaN(number)) {
    throw new Error("Invalid number input");
  }
}

export function cleanNumbers(inputNumbers) {
  const numbers = [];

  for (const numberInput of inputNumbers) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers;
}
