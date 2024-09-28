
function stopWatch (){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
const first = stopWatch();
console.log(first());
console.log(first());
console.log(first());
console.log(first());
const second = stopWatch();

