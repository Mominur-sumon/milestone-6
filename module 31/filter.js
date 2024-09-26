

// filter method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// The filter() method does not change the original array.

const numbers = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const bigNumbers = numbers.filter(num => num >= 10);
console.log(bigNumbers);

const smallNumbers = numbers.filter(num => num < 10);
console.log(smallNumbers);
const greaterThan80 = numbers.filter(num => num > 80);
console.log(greaterThan80); // []

const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const tNames = friends.filter(friend => friend.startsWith('Tom'));
console.log(tNames);

const oddFriends = friends.filter(friend => friend.length % 2 !== 0);
console.log(oddFriends);

const evenFriends = friends.filter(friend => friend.length % 2 === 0);
console.log(evenFriends);