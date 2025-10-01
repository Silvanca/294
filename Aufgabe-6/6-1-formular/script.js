const submit = document.querySelector("#submite");
const form = document.forms.Ratespiel
const output = document.querySelector("#output")

let zahl =  Math.floor(Math.random() * 100);

function check(e){
    e.preventDefault();
    const formData = new FormData(form);
    const guess = formData.get("guess");

    if (guess > zahl){
        output.innerText = "Dein Zahl ist zu gross"
    }else if(guess < zahl){
        output.innerText = "Deine Zahl ist zu klein"
    }else{
        output.innerText = "Du hast gewonnen"
        gefunden = true;
    }
}

submit.addEventListener("click", check);