
// arguments is an array-like object that contains all the arguments passed to the function.
function sum (a,b,c) {
    const args = [...arguments];
    console.log(args); // [ 1, 2, 3, 4, 5 ]
    console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
    const result = a + b + c;
    return result;
}

const result = sum(1,2,3,4,5);
console.log(result); // 6
console.log(typeof sum); // function
console.log(sum.length); // 3 (number of parameters)