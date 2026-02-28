const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * canvas.height;
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.15)"; // Increased fade (lighter effect)
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(0, 255, 136, 0.35)"; // Softer green with transparency
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i]);

        if (drops[i] > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i] += fontSize;
    }
}

setInterval(draw, 50); // Slower rain (less visual noise)

