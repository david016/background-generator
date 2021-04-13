const h1 = document.querySelector("h1")
const button = document.querySelector("button")
const body = document.querySelector("body")

const randomColor = function () {
    const r = Math.round(Math.random() * 256);
    const g = Math.round(Math.random() * 256);
    const b = Math.round(Math.random() * 256);
    if (r + g + b < 160) {
        h1.style.color = "white"
    }
    else {
        h1.style.color = "black"
    }
    return `rgb(${r},${g},${b})`;
}
const onClick = function () {
    const newColor = randomColor();
    body.style.backgroundColor = newColor;
    h1.innerText = newColor;
}
button.addEventListener("click", onClick)