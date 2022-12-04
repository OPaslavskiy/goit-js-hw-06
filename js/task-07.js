const input = document.querySelector(`#font-size-control`);
const article = document.querySelector(`#text`);

input.addEventListener("input", changeSizeOfArticle);

let sizeOfArticle = "";
console.dir(article.style);

function changeSizeOfArticle() {
  article.style.fontSize = `${input.value}px`;
}
