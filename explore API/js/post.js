

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

loadPosts();

const postList = document.getElementById('post-conatiner');

function displayPosts(data) {
    for (const post of data) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>${post.id}</h3>
        <h4>${post.title}</h4>
        <p>${post.body}</p>
       `
       postList.appendChild(div);
    }
}