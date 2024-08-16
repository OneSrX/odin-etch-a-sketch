const container = document.querySelector(".container");
const resizeCanvasBtn = document.querySelector(".resize-canvas-btn");
const PAD_Width = window.getComputedStyle(container).getPropertyValue("width");

// draw the grid with default size on page load
drawGrid();

resizeCanvasBtn.addEventListener("click", resizeCanvas);

function resizeCanvas() {
  let userInput = parseInt(
    prompt("Choose number of squares per side (max: 100, min: 1)")
  );

  if (isNaN(userInput) || userInput <= 0 || userInput > 100) {
    alert("Please enter a valid number!");
    return;
  }

  container.innerHTML = ""; // clear existing grid
  drawGrid(userInput); // re-draw the grid with the new size
}

function drawGrid(squares_per_side = 16) {
  for (let i = 0; i < squares_per_side ** 2; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }

  const divs = document.querySelectorAll(".container > div");
  divs.forEach((div) => {
    div.style.width = `calc(${PAD_Width} / ${squares_per_side})`;

    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = getRandomColor();
    });
  });
}

function getRandomColor() {
  const R = Math.floor(Math.random() * 256);
  const G = Math.floor(Math.random() * 256);
  const B = Math.floor(Math.random() * 256);

  return `rgba(${R}, ${G}, ${B})`;
}
