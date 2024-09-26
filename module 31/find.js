
// find() method returns the value of the first element in the provided array that satisfies the provided testing function.
// find() method does not change the original array.

const numbers = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 4

const firstOdd = numbers.find(num => num % 2 !== 0);
console.log(firstOdd); // 5

const firstPrime = numbers.find(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
});
console.log(firstPrime); // 5