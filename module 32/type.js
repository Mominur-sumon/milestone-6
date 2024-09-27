// primitive data types
const a = 5;
const b = 'hello world';
const c = true;

// non primitive data types
const ages = [1, 2, 3, 4, 5];
const person = {
    name: 'John',
    age: 32,
    isAdult: true
};
// console.log(typeof a, typeof b, typeof c, typeof ages, typeof person);    

let x = 5;
let y = x;
console.log(x, y);
y = 7 ;
console.log(x, y);

let p = {
    job: 'developer'
}
let q = p;
console.log(p, q);
q = {
    job: 'back end developer' 
}
console.log(p, q); // p will have job as developer and q will have job as back end developer

q = p;
q.job = 'designer';

console.log(p, q); // both p and q will have job as designer