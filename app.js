const container = document.querySelector(".container");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let userInput = parseInt(prompt("Enter your preferred grid size: "));
  container.innerHTML = "";
  drawGrid(userInput);
});

function drawGrid(size = 16) {
  for (let i = 0; i < size ** 2; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }

  const divs = document.querySelectorAll(".container > div");
  divs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "red";
    });
  });
}
