
// task 1 
const mul = (a,b,c) => a * b * c;
console.log(mul(2,3,4));

// task 2
const str = `I am a web developer
I love to code
I am learning JavaScript`;
console.log(str);

// task 3
const result = (a , b= 10) => {
    const sum = a + b;
    const sub = a - b;
    return [sum, sub];
    
}
console.log(result(30));

// task 4
const names = ['John', 'Jane','karim','sadhona', 'Jack', 'Jill'];

const evenName = [];
const evenName2 = (names)=> {
    
    for(name of names){
        if(name.length % 2 === 0){
            evenName.push(name);
        }
    }
    return evenName;
}
// result from return
// const evenNames = evenName2(names);
// console.log(evenNames);
evenName2(names);
console.log(evenName);

// task 5
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
const square = [];
const squareSumAvg = (arr) => {
    for(num of arr){
        sum += num;
        square.push(num * num);
    }
    const avg = sum / arr.length;
    return [square,sum, avg];

}
const [squareArr, sumArr, avgArr] = squareSumAvg(arr);
console.log(squareArr);
console.log("=====================================");
console.log(squareSumAvg(arr));

// task 6
let sum1 = 0;
const sumOfArr = (arr) => {
    for(num of arr){
        sum1 += num*num;
    }
    return sum1 / arr.length;
    
}
console.log(sumOfArr(arr));

// task 7
const arr1 = [10, 20, 30, 40, 50];
const arr2 = [60, 70, 80, 90, 100];
const max =(arr1, arr2) => {
    const arr = [...arr1, ...arr2];
    return Math.max(...arr);
}
console.log(max(arr1, arr2));