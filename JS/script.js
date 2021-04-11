let button = document.querySelector(".button");
let body = document.querySelector(".body");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");
})

button.addEventListener("click", () => {
    if (button.innerText === "Włącz ciemny motyw") {
        button.innerText = "Wyłącz ciemny motyw";
    } else {
        button.innerText = "Włącz ciemny motyw";
    }
})