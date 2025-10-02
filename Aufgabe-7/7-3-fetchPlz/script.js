let places;

fetch("./places.json")
    .then((res) => res.json())
    .then((data) => places = data);

document.addEventListener("DOMContentLoaded", () => {
    const zipEl = document.querySelector("input[name=zip]");
    const townEl = document.querySelector("input[name=town]");
    zipEl.addEventListener("blur", () => {
        const entry = places.find((p) => p.zipcode === zipEl.value);
        townEl.value = entry.place;
    })
});