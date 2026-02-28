const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gridSize = 40;
let pulse = 0;

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(0, 150, 255, 0.08)";
    ctx.lineWidth = 1;

    for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // Pulse circle effect
    pulse += 0.05;
    const radius = 100 + Math.sin(pulse) * 50;

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(0, 200, 255, 0.15)";
    ctx.stroke();
}



let scanY = 0;

function scanLine() {
    ctx.fillStyle = "rgba(0, 255, 255, 0.04)";
    ctx.fillRect(0, scanY, canvas.width, 2);

    scanY += 2;
    if (scanY > canvas.height) scanY = 0;
}

function animate() {
    drawGrid();
    scanLine();
    requestAnimationFrame(animate);
}

animate();
