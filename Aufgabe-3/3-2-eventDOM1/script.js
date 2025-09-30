function remove(){
    for(let i = 0; i < 3; i++){
        const delet = document.querySelector(".Pictures img");
        delet.remove();
    }
}

function addimg(){
    for(let i = 0; i < 3; i++){
        let newItem = document.createElement("img");
        newItem.src=`https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`
        document.querySelector(".Pictures").append(newItem);
    }
}

document.querySelector("#duo").onclick = remove;
document.querySelector("#uno").onclick = addimg;