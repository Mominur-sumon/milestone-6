// double equal == is used to check the value of the variable. If the value of the variable is the same then it returns true otherwise it returns false.
// Triple equal === is used to check the value and type of the variable. If the value and type of the variable are the same then it returns true otherwise it returns false.

const first = 2 ;
const second =  '2' ;
if(first === second){
    console.log("value is equal");
}else{
    console.log('value is not equal');
}

const third = true;
if(1 == third){
    console.log("value is equal"); // value is equal
}else{
    console.log('value is not equal');
}

if(1 === third){
    console.log("value is equal"); 
}else{
    console.log('value is not equal'); // value is not equal
}

// type coercion

