const input = document.querySelector(`#font-size-control`);
const article = document.querySelector(`#text`);

input.addEventListener("input", changeSizeOfArticle);

let sizeOfArticle = "";

function changeSizeOfArticle() {
  sizeOfArticle = `<style>#text{font-size: ${input.value}px;}</style>`;
  input.insertAdjacentHTML("beforebegin", sizeOfArticle);
}
