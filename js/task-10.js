function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector(".boxes");

input.addEventListener("input", numberOf);
function numberOf() {
  let number = Number(input.value);
  console.log(number);
  return number;
}

createBtn.addEventListener("click", creatDivs);
const divArray = [];

function creatDivs() {
  for (let i = 0; i < numberOf(); i += 1) {
    const div = document.createElement("div");
    divArray.push(div);
    console.log(divArray);
  }
}
divBoxes.prepend(...divArray);
