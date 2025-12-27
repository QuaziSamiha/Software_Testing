export function add(numbers) {
  let sum = 0;

  // throw new Error("No argument provided"); // FOR TEST CASE - 5
  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

// ? ======== v1 ========
// export function add(numbers) {
//   let sum = 0;

//   for (const number of numbers) {
//     sum += number;
//   }
//   return sum;
// }
