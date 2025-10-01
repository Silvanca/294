const cup1 = document.querySelector("#uno");
const cup2 = document.querySelector("#duo");
const cup3 = document.querySelector("#tres");
const button = document.querySelector("#vier");

let count = 0;
const open = src="cup-open.png";
let cupball;

function cup_uno(){
    if(cup1.src.endsWith("cup-open.png")){
        cup1.src="cup.png"
    }else{
        if(cupball === 1){
            cup1.src="cup-open-ball.png"
            count++;
        }else{
            cup1.src="cup-open.png"
            count++;
        }
    }
    document.querySelector("#Versuche").innerText = "Versuche " + count;
}

function cup_duo(){
    if(cup2.src.endsWith("cup-open.png")){
        cup2.src="cup.png"
    }else{
        if(cupball === 2){
            cup2.src="cup-open-ball.png"
            count++;
        }else{
            cup2.src="cup-open.png"
            count++;
        }
    }
    document.querySelector("#Versuche").innerText = "Versuche " + count;
}

function cup_tres(){
    if(cup3.src.endsWith("cup-open.png")){
        cup3.src="cup.png"
    }else{
        if(cupball === 3){
            cup3.src="cup-open-ball.png"
            count++;
        }else{
            cup3.src="cup-open.png"
            count++;
        }
    }
    document.querySelector("#Versuche").innerText = "Versuche " + count;
}

function shuffle(){
    cup1.src="cup.png";
    cup2.src="cup.png";
    cup3.src="cup.png";
    cupball = Math.floor(Math.random() * 3) + 1;
    count = 0;
    document.querySelector("#Versuche").innerText = "Versuche " + count;
}

cup1.addEventListener("click", cup_uno);
cup2.addEventListener("click", cup_duo);
cup3.addEventListener("click", cup_tres);
button.addEventListener("click", shuffle);