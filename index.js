const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const colors = ["red", "blue", "green", "orange", "purple", "pink"];

let x = 50;
let y = 50;
let dx = 2;
let dy = 2;
const ballRadius = 30;

function update() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = ctx.fillStyle || "purple";
  ctx.fill();
  ctx.closePath();

  x += dx;
  y += dy;

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
    const randomIndex = Math.floor(Math.random() * colors.length);
    ctx.fillStyle = colors[randomIndex];
    const randomBorderColor = colors[Math.floor(Math.random() * colors.length)];
    canvas.style.borderColor = randomBorderColor;
  }

  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
    const randomIndex = Math.floor(Math.random() * colors.length);
    ctx.fillStyle = colors[randomIndex];
    const randomBorderColor = colors[Math.floor(Math.random() * colors.length)];
    canvas.style.borderColor = randomBorderColor;
  }
}

function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}

gameLoop();
