
// map works on each element of an array and returns a new array
// forEach does not return anything
const numbers = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const result = numbers.forEach(num => {
    console.log(num * 2);
});
console.log(result); // undefined