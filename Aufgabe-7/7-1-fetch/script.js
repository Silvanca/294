const API = "https://jsonplaceholder.typicode.com/posts";


fetch(API)
    .then((response) => response.json())
    .then((data) => {
        const postContainer = document.querySelector("#post");

        data.forEach((post) => {

            const postElement = document.createElement("div");

            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <hr>
             `;
            postContainer.appendChild(postElement);
        }) 

        .catch((error) => {
            console.error("Fehler beim Laden:", error);
        });
    })