const btn_submit = document.querySelector("#submit")

function login(event){
    event.preventDefault();
    const link = document.createElement("a")
    link.href = "/Projekt-9/todolist/todolist.html";
    link.click()
}


btn_submit.addEventListener("click", login)