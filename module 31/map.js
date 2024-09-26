

const numbers = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const double = [];
for (const num of numbers) {
    const result = num * 2;
    double.push(result);
}
console.log(double);

// using map
const doubleMap = numbers.map(num => num * 2);
console.log(doubleMap);


const numbers2 = [12, 15, 16, 17, 18, 19, 20];
const doubled = numbers2.map(num => num * 2);
console.log(doubled);

const fiveBonus = numbers2.map(num => num + 5);
console.log(fiveBonus);

const divideBy2 = numbers2.map(num => num / 2);
console.log(divideBy2);

const friends = ['Tom Hanks', 'Kom Cruise', 'Tom Brady', 'Tom Solaiman'];
const friendsLength = friends.map(friend => friend.length);
console.log(friendsLength);

const firstletters = friends.map(friend => friend[0]);
console.log(firstletters);