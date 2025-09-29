let zahl =  Math.floor(Math.random() * 100);

let gefunden = false;

while(!gefunden){

    let erraten = prompt("Rate");

    if (erraten > zahl){
        alert("Deine Zahl ist grösser");
    }else if(erraten < zahl){
        alert("Deine Zahl ist kleiner");
    }else{
        alert("Du hast die Zahl richtig erraten!")
        gefunden = true;
    }
}

