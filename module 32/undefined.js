
/*
    8 ways to get undefined in JavaScript
    1. Variable declaration without initialization
    2. Function returns nothing
    3. Function without return statement

*/
let x;
console.log(x); // undefined


function second (a,b){
    const total = a + b;
}

console.log(second(2,3)); // undefined

function third (a,b){
    const total = a + b;
    return;
}
console.log(third(2,3)); // undefined

// 4. Accessing non existing property of an object
const person = {
    name: 'John',
    age: 32,
    isAdult: true
};
console.log(person.job); // undefined

// 5. Accessing non existing index of an array
const ages = [1, 2, 3, 4, 5];
console.log(ages[5]); // undefined

console.log("====================================");
// 6. Function parameter without argument
function fourth (a){
    console.log(a);
}
console.log(fourth()); // undefined

// 7. Using void operator
console.log(void 0); // undefined

// 8. Using undefined keyword
console.log(undefined); // undefined

// 9. Using typeof operator
console.log(typeof undefined); // undefined

console.log("====================================");

console.log(typeof null); // object