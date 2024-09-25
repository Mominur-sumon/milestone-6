// function declaration

function add (a, b){
    return a + b;
}
const sum = add(30, 50);
console.log(sum);


// function expression
const sub = function(a, b) 
{
    return a - b;
} 
console.log(sub(50, 30));

// arrow function
const mul = (a, b) => a * b;
console.log(mul(30, 50));

const div = (a, b) => {
    return a / b;
}
console.log(div(50, 30).toFixed(2));

const getAge = (person) => person.age;

const person = {
    name: 'John',
    age: 30
}
console.log(getAge(person));

// arrow function with one parameter we can remove the parenthesis
const getThird = (arr) => arr[2];
const arr = [10, 20,40, 30, 40, 50];
console.log(getThird(arr));

// arrow function with no parameter
const greet = () => 'Hello World';
console.log(greet());

// large arro function
const doMath = (a, b) => {
    const sum = a + b;
    const sub = a - b;
    const mul = a * b;
    const div = a / b;
    return [sum, sub, mul, div];
}
console.log(doMath(30, 50));