function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");
const head = document.querySelector("head");

input.addEventListener("input", numberOf);
function numberOf() {
  let amount = Number(input.value);
  return amount;
}

createBtn.addEventListener("click", createBoxes);
let divArray = [];
let styleArray;
function createBoxes() {
  for (let i = 0; i < numberOf(); i += 1) {
    const div = document.createElement("div");
    div.classList.add(`div_${[i]}`);
    divArray.push(div);

    const styleOfDiv = 30 + [i] * 10;
    styleArray = `<style>
    .div_${[i]} {
      margin-left: auto;
      margin-right: auto;
      width: ${styleOfDiv}px;
      height: ${styleOfDiv}px;
      background-color: ${getRandomHexColor()};
    }
    </style>`;

    head.insertAdjacentHTML("beforeend", styleArray);
  }
  divBoxes.append(...divArray);
}

destroyBtn.addEventListener("click", clearBoxes);
function clearBoxes() {
  divBoxes.innerHTML = "";
}
