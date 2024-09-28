// Pass by value and pass by reference in JavaScript
// primitive data type: pass by value
// object data type: pass by reference

let num1 = 7 ;
let num2 = 8 ;

function multiply(a, b){
    a = 27 ;
    result = a * b;
    return result ;
}


const output = multiply(num1 , num2);
// console.log(output); // 56

// console.log(num1); // 7
// console.log(num2); // 8

let student1 = {name : 'Mominur Rahman', age : 21, partner: "nai"};
let student2 = {name : 'Sumon', age : 22, partner: "haray gece"};

function makeMovie(couple1, couple2){
    couple1.name = 'Momin';
    couple2.partner = 'fire pailam';
}

console.log(student1, student2); // { name: 'Mominur Rahman', age: 21, partner: 'nai' } { name: 'Sumon', age: 22, partner: 'haray gece' }
makeMovie(student1, student2);
console.log(student1); // { name: 'Momin', age: 21, partner: 'nai' } // because of pass by reference
console.log(student2); // { name: 'Sumon', age: 22, partner: 'fire pailam' } // because of pass by reference