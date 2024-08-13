const container = document.querySelector(".container");
const button = document.querySelector("button");
const PAD_WIDTH = 560;

// set the default width of the divs container
container.style.width = `${PAD_WIDTH}px`;

function drawGrid(size = 16) {
  for (let i = 0; i < size ** 2; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }

  const divs = document.querySelectorAll(".container > div");
  divs.forEach((div) => {
    div.style.cssText = `
      width: calc(${PAD_WIDTH}px / ${size});
      aspect-ratio: 1/1;
      border: 1px solid #eee;
    `;

    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "red";
    });
  });
}

// draw the grid with default size
drawGrid();

button.addEventListener("click", () => {
  let userInput = parseInt(prompt("Enter your preferred grid size: "));

  if (isNaN(userInput) || userInput <= 0 || userInput > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  container.innerHTML = ""; // clear existing grid
  drawGrid(userInput); // re-draw the grid with the new size
});
