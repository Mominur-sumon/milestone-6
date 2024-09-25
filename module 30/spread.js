const max = Math.max(23,1, 2, 3, 4, 5);
console.log(max);

const arr = [10, 20, 30, 40, 50];
console.log(...arr);
console.log(Math.max(...arr)); // ... it will spread the array and pass the elements as arguments
console.log(Math.min(...arr)); // ... it will spread the array and pass the elements as arguments

// use spread operator to copy array
const arr1 = [10, 20, 30, 40, 50];
const arr2 = [...arr1];
arr1.push(60); // it will not affect arr2 but it will affect arr1 
console.log(arr2);
arr3 = [arr1]; // it will create nested array
console.log(arr3);
arr4 = [...arr1]; // it will create new array
console.log(arr4); 
arr5 = [...arr1, 60]; // it will add 60 to the new array
console.log(arr5);
// use spread operator to copy object
const person = {
    name: 'John',
    age: 30
}
const person2 = {...person};
console.log(person2);

