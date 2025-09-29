let name = prompt("What is your name?");

let jetzt = new Date();
let stunde = jetzt.getHours();

let begruessung;

if(stunde >= 5 && stunde < 10){
    begruessung = "Guten Morgen";
}else if(stunde >= 10 && stunde < 18){
    begruessung  = "Guten Tag";
}else if(stunde >= 18 && stunde < 22 ){
    begruessung = "Guten Abend";
}else{
    begruessung = "Gute Nacht";
}

alert(begruessung + " " + name + "!");