

// reduce is a function that takes an array and a function and returns a single value. It uses the function to combine all the elements of the array into a single value.

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// The reducer function takes four arguments:

const numbers = [ 4, 5, 7, 10, 12, 15, 20, 25, 30, 35, 40, 45, 50 ];
const sum = numbers.reduce((acc, num) => acc + num, 0); // 0 is the initial value of the accumulator
console.log(sum); // 283

const max = numbers.reduce((acc, num) => Math.max(acc, num), 0);
console.log(max); // 50