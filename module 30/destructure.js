

const actor = {
    name: 'Ananta Jalil',
    age : 40,
    phone :'01700000000',
    address : 'Dhaka',
    money : 100000000,
}

const {name, age, phone, address, money} = actor; // destructuring object
console.log(name, age, phone, address, money);

// we can also rename the variable
const {name: actorName, age: actorAge, phone: actorPhone, address: actorAddress, money: actorMoney} = actor; // destructuring object
console.log(actorName, actorAge, actorPhone, actorAddress, actorMoney);

// destructuring array
const arr = [10, 20, 30, 40, 50];
const [first, second, third, fourth, fifth] = arr;
console.log(first, second, third, fourth, fifth);

// we can also skip the element
const [first1, , third1, , fifth1] = arr;
console.log(first1, third1, fifth1);

// we can also use rest operator
const [first2, ...rest] = arr;
console.log(first2, ...rest);

function doubleIt(num){
    return [num, num * 2];
}
console.log(doubleIt(5));

const [num1, num2] = doubleIt(5);
console.log(num1, num2);
