let container = document.querySelector(".container");
let result = 16;
let divCreate = function (result) {
  for (i = 0; i < result * result; i++) {
    let div = document.createElement("div");
    // let div = (document.container.innerHTML = "div");
    div.innerHTML = "";
    container.appendChild(div);
    div.setAttribute("class", "block");
  }
};
divCreate(result);

let block = document.querySelector(".block");
let blocks = document.querySelectorAll(".block");

let colorx = "#";
function getRandomColor() {
  return (colorx = Math.floor(Math.random() * 16777215).toString(16));
}

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  blocks.forEach((block) => {
    block.setAttribute("style", `background-color: white`);
  });
});
let size = document.querySelector(".size");

size.addEventListener("click", () => {
  result = window.prompt("What size from 1 to 64 do you want?");
  container.innerHTML = "";
  container.setAttribute(
    "style",
    `grid-template: repeat(${result}, 1fr)/ repeat(${result}, 1fr);`
  );
  divCreate(result);
  block = document.querySelector(".block");
  blocks = document.querySelectorAll(".block");
  blocks.forEach((block) =>
    block.addEventListener("mouseover", () => {
      getRandomColor();
      block.setAttribute("style", `background-color: #${colorx};`);
    })
  );
});
color = function () {
  blocks.forEach((block) =>
    block.addEventListener("mouseover", () => {
      getRandomColor();
      block.setAttribute("style", `background-color: #${colorx};`);
    })
  );
};

color();
//black button
let black = document.querySelector(".black");
black.addEventListener("click", () => {
  blocks.forEach((block) =>
    block.addEventListener("mouseover", () => {
      block.setAttribute("style", `background-color: black;`);
    })
  );
});
//random color button
let random = document.querySelector(".random");
random.addEventListener("click", () => {
  blocks.forEach((block) =>
    block.addEventListener("mouseover", () => {
      getRandomColor();
      block.setAttribute("style", `background-color: #${colorx};`);
    })
  );
});
