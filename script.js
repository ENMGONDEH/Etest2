let coins = parseInt(localStorage.getItem('coins')) || 0;
let clicks = parseInt(localStorage.getItem('clicks')) || 0;

document.getElementById('coins').innerText = coins;

function saveState() {
    localStorage.setItem('coins', coins);
    localStorage.setItem('clicks', clicks);
}

function handleClick() {
    coins++;
    clicks++;
    document.getElementById("coins").innerText = coins;

    const button = document.getElementById("coinButton");
    button.classList.add("button-clicked");

    button.addEventListener("animationend", () => {
        button.classList.remove("button-clicked");
    }, { once: true });

    saveState();
}