const glass = {
    name : 'glass',
    price : 100,
    color : 'white',
    weight : '100gm',
    isClean : true,
    isBroken : false,
} ;
// const {name, price, color, weight, isClean, isBroken} = glass;
// console.log(name, price, color, weight, isClean, isBroken);

console.log(glass);

const keys = Object.keys(glass);
console.log(keys);
const values = Object.values(glass);
console.log(values);

// pair = key and value
const pair = Object.entries(glass);
console.log(pair);

// delete property
// delete glass.isClean;
console.log(glass);

const {isClean, ...rest} = glass;
console.log(rest);

// freeze object
Object.freeze(glass);
glass.price = 200; // it will not update the value
console.log(glass);
glass.source = 'china'; // it will not add new property
console.log(glass);
delete glass.isClean; // it will not delete the property
console.log(glass);

// seal object
Object.seal(glass);
glass.price = 200; // it will update the value
console.log(glass);
glass.source = 'china'; // it will not add new property
console.log(glass);

