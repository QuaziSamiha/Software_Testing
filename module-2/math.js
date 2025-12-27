export function add(numbers) {
  let sum = 0;

  // throw new Error("No argument provided");
  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}
