
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// fetch('https://jsonplaceholder.typicode.com/todos/1') 
//     .then(response => console.log(response))     


const url = 'https://jsonplaceholder.typicode.com/todos/1' ;

function LoadData(){
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}
