const btn_newtask = document.querySelector("#button-id")
const form = document.forms.Form;
const API = ("http://localhost:3000/tasks");

function newtask(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const title = formData.get("erstellen-title");

    const postData = {title: title};

    fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
    })
    .then((response) => response.json())
    .then(data => {
        const postContainer = document.querySelector("#todolist");

        const postElement = document.createElement("div");

        postElement.innerHTML = `
        <h2>${data.title}</h2>
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


form.addEventListener("submit", newtask)