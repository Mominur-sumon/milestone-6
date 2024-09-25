

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);

// for of loop
sum = 0;
for(const number of numbers){
    sum += number;
}
console.log(sum);

const name = 'Ananta Jalil';
for(const char of name){
    console.log(char);
}

const glass = {
    name : 'glass',
    price : 100,
    color : 'white',
    weight : '100gm',
    isClean : true,
    isBroken : false,
} ;

// for in loop
for(const key in glass){
    console.log(key, glass[key]);
}
console.log("=====================================");
// for of loop in object
const keys = Object.keys(glass);
for(const key of keys){
    console.log(key, glass[key]);
}