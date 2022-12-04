const input = document.querySelector(`#font-size-control`);
const article = document.querySelector(`#text`);

input.addEventListener("input", changeSizeOfArticle);

function changeSizeOfArticle() {
  article.style.fontSize = `${input.value}px`;
}
