

const url2 = 'https://jsonplaceholder.typicode.com/todos/1';
function loadData2() {
    fetch(url2)
        .then(response => response.json())
        .then(data => console.log(data));
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
}

