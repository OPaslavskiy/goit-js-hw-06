function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

input.addEventListener("input", numberOf);
function numberOf() {
  let amount = Number(input.value);
  return amount;
}

createBtn.addEventListener("click", createBoxes);
const divArray = [];
const styleArray = [];
const styles = document.createElement("style");
styleArray.push(styles);

function createBoxes() {
  for (let i = 0; i < numberOf(); i += 1) {
    const div = document.createElement("div");
    div.textContent = "qwerty";
    div.classList.add(`div${[i]}`);
    divArray.push(div);

    const styleOfDiv = 30 + [i] * 10;
    console.log(styleOfDiv);
  }
  divBoxes.append(...divArray);
  divBoxes.before(...styleArray);
}
