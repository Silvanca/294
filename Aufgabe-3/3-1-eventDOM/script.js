let zahl = 0;
let zahl2 = 0;

function hallo() {
    alert("Hallo Welt");
}

function count() {
    zahl = zahl + 1;
    document.querySelector("h1").innerText = zahl;
}

function count2() {
    zahl2 = zahl2 + 1;
    document.querySelectorAll("h1")[1].innerText = zahl2;
}

function getposition(event) {
    console.log(event.clientX,event.clientY)
    img.style.left = event.clientX + "px";
    img.style.top = event.clientY + "px";
}

const img = document.querySelector("#football");
const div = document.querySelector(".field");
div.addEventListener("mousedown", getposition)