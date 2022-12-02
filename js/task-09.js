function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyOfDocument = document.querySelector("body");
const styleOfDocument = document.querySelector("style");
const spanColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", changeColorOfBody);

let colorForBody = "";

function changeColorOfBody(event) {
  colorForBody = `body{background-color: ${getRandomHexColor()};}`;

  styleOfDocument.insertAdjacentHTML("beforeend", colorForBody);
  spanColor.textContent = getRandomHexColor();
}

console.log(styleOfDocument);
