const API = "https://jsonplaceholder.typicode.com/posts"
const form = document.forms.Post;
const button = document.querySelector(".delete")




function post(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const title = formData.get("title");
    const inhalt = formData.get("inhalt");

    const postData = {title: title, body: inhalt};

    fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    })
    .then((response) => response.json())
    .then(data => {
        const postContainer = document.querySelector("#post");

        const postElement = document.createElement("div");

        postElement.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
        <button class="delete" data-id="${data.id}">Delete</button>
        <hr>
        `;

        postContainer.appendChild(postElement);
        
        const deleteButton = postElement.querySelector(".delete");
        deleteButton.addEventListener("click", deletepost);
    })

    .catch(error => {
        console.error("Fehler beim Senden:", error);
        alert("Fehler beim Erstellen des Posts!"); 
    });
}


function deletepost(event){
    const postId = event.target.dataset.id;
    fetch(API + "/" + postId, { method: "DELETE" }) 
    .then(response => {
        event.target.parentElement.remove();
    })

    
}

form.addEventListener("submit", post)
