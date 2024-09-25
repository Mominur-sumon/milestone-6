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
