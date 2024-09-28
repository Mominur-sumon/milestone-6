
function greeting (greetingHandler, name){
    greetingHandler(name);
}


function greetingHandler(name){
    console.log("good morning, " + name);
}

function greetevening(name){
    console.log("good evening, " + name);
}

function greetnight(name){
    console.log("good night, " + name);
}

greeting(greetingHandler, 'Mominur Rahman'); 
// Output: good morning, Mominur Rahman
greeting(greetingHandler, 'Sumon');
// Output: good morning, Sumon

greeting(greetevening, 'Mominur Rahman');
greeting(greetevening, 'Sumon');
// Output: good evening, Mominur Rahman
// Output: good evening, Sumon

greeting(greetnight, 'Mominur Rahman');
greeting(greetnight, 'Sumon');

// Output: good night, Mominur Rahman
// Output: good night, Sumon

