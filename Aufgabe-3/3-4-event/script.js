const button = document.querySelector("#choose");
let country = null;

function choose(){
    if(country === null){
        country = document.querySelector(`#destinations li:nth-of-type(${Math.floor(Math.random()*194)+1})`);
        console.log(country);
        country.classList.add("visitplace")
    }else{
        country.classList.remove("visitplace");
        country = document.querySelector(`#destinations li:nth-of-type(${Math.floor(Math.random()*194)+1})`);
        console.log(country);
        country.classList.add("visitplace")
    }
}


button.addEventListener("click", choose);