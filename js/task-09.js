function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyOfDocument = document.body;
const spanColor = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", changeColorOfBody);

// let colorForBody = "";

function changeColorOfBody() {
  const colorForBody = getRandomHexColor();

  bodyOfDocument.style.backgroundColor = colorForBody;
  spanColor.textContent = colorForBody;
}
