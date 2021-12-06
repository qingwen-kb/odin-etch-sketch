const body = document.querySelector("body");
const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-btn");
const inputGrid = document.querySelector(".input-grid");
const submit = document.querySelector(".submit-btn");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let gridSize = inputGrid.value;
  createGrid(gridSize);
});

function createGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = `${container.clientWidth / gridSize}px`;
      cell.style.height = `${container.clientWidth / gridSize}px`;
      row.appendChild(cell);
    }
  }
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      cell.classList.add("active");
    });
  });
}
// let gridSize = 5;
// for (let i = 0; i < gridSize; i++) {
//   const row = document.createElement("div");
//   row.classList.add("row");
//   container.appendChild(row);
//   for (let j = 0; j < gridSize; j++) {
//     const cell = document.createElement("div");
//     cell.classList.add("cell");
//     cell.style.width = `${container.clientWidth / gridSize}px`;
//     cell.style.height = `${container.clientWidth / gridSize}px`;
//     row.appendChild(cell);
//   }
// }
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("mouseover", (e) => {
    console.log(e);
    cell.classList.add("active");
  });
});

resetBtn.addEventListener("click", () => {
  location.reload();
});
