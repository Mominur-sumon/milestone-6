
const numbers = [1, 3, 5, 7, 9];

const makeEven = numbers.map(num => num +1);
console.log(makeEven); // [2, 4, 6, 8, 10]

// uing for loop
const makeEven1 = [];
for(let i =0 ; i < numbers.length; i++){
    makeEven1.push(numbers[i] + 1);
}
console.log(makeEven1); // [2, 4, 6, 8, 10]


// task 2
const arr = [ 33, 44, 55, 66, 77, 88, 99, 100];
const divisibleBy10 = arr.filter(num => num % 10 === 0);
console.log(divisibleBy10); // [100]

// task 3
const instrutors = [
    {name : 'Nodi', age: 25, position : 'senior developer'},
    {name : 'Rasel', age: 30, position : 'junior developer'},
    {name : 'Shakil', age: 35, position : 'senior developer'},
    {name : 'Sakib', age: 40, position : 'junior developer'},
]

const seniorDeveloper = instrutors.filter(instructor => instructor.position === 'senior developer');
console.log(seniorDeveloper); // [ { name: 'Nodi', age: 25, position: 'senior developer' }, { name: 'Shakil', age: 35, position: 'senior developer' } ]

// task 4
const people = [
    {name : 'Nodi', age: 25, position : 'senior developer'},
    {name : 'Rasel', age: 30, position : 'junior developer'},
    {name : 'Shakil', age: 35, position : 'senior developer'},
    {name : 'Sakib', age: 40, position : 'junior developer'},
]

const sumOfAge = people.reduce((acc, person) => acc + person.age, 0);
console.log(sumOfAge); // 130

// using for loop
let sumOfAge1 = 0;
for(let i = 0; i < people.length; i++){
    sumOfAge1 += people[i].age;
}
console.log(sumOfAge1); // 130

// using for of loop 
let sumOfAge2 = 0;
for(const person of people){
    sumOfAge2 += person.age;
}
console.log(sumOfAge2); // 130