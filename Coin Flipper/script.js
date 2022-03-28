let box = document.getElementById("box")

let coin

document.addEventListener("click", myFunction);

function myFunction() {
coin = Math.round(Math.random());
console.log(coin)

if (coin === 1) {
    box.innerHTML = "HEADS"
} else {
    box.innerHTML = "TAILS"
}
}
