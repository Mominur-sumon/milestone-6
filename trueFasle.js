
// truty list
// 1. true
// 2. any number positive or negative but not zero
// 3. any string including white space
// 4. '0' or "0" or `0` or 'false' or "false" or `false`
// 5. [], {} empty array, object


// Falsey list
// 1. false
// 2. 0
// 3. "" empty string
// 4. undefined
// 5. null





let x = [0];

if(x){
    console.log("This is truthy");    
} else {
    console.log("This is falsy");
}

// optional  falsy check 

const y = '';
if(!x){
    console.log("This is falsy");
}
else {
    console.log("This is truthy");
}

// optional  truthy check
let z = '0';
if(!!z){
    console.log("This is truthy");
}
else {
    console.log("This is falsy");
}