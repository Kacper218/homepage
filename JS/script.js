{
    const welcome = () => {
        console.log("ŚNIĄCY ZBUDŹ SIĘ!")
    }
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        body.classList.toggle("body--dark");
    }
    const toggleButtonText = () => {
        const button = document.querySelector(".button");
        if (button.innerText === "Włącz ciemny motyw") {
            button.innerText = "Wyłącz ciemny motyw";
        } else {
            button.innerText = "Włącz ciemny motyw";
        }
    }
    const init = () => {
        const button = document.querySelector(".button");

        button.addEventListener("click", toggleBackground)
        button.addEventListener("click", toggleButtonText)

        welcome();

    }
    init();
}