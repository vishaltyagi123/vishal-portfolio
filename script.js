// Typing effect
const text = "Full Stack Developer | Laravel | JavaScript | DevOps";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 80);
    }
}
type();

// Floating background symbols
function createSymbol() {
    const symbol = document.createElement("div");
    symbol.classList.add("symbol");
    symbol.innerText = "⚡";
    symbol.style.left = Math.random() * 100 + "vw";
    symbol.style.animationDuration = (Math.random() * 5 + 5) + "s";
    document.body.appendChild(symbol);

    setTimeout(() => {
        symbol.remove();
    }, 10000);
}

setInterval(createSymbol, 500);
