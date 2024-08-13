const GRID_SIZE = 16 * 16;
const container = document.querySelector(".container");

for (let i = 0; i < GRID_SIZE; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
}

const divs = document.querySelectorAll(".container > div");
divs.forEach((div) => {
  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "red";
  });
});
