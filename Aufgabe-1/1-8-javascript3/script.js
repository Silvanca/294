let zahlen = [];



while(true){
    let eingabe = prompt("Gebe eine Zahl ein. Wenn du fertig bist, drücke einfach enter");

    if(!eingabe){
        break;
    };
    zahlen.push(Number(eingabe));

}

let result = zahlen.reduce((sum, current) => sum + current, 0);
alert(result);