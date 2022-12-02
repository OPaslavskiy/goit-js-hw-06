const input = document.querySelector(`#font-size-control`);
const article = document.querySelector(`#text`);

console.log(input);
console.log(article);

let sizeOfArticle = "";

input.addEventListener("input", changeSizeOfArticle);

function changeSizeOfArticle() {
  sizeOfArticle = `<style>#text{font-size: ${input.value}px;}</style>`;
  input.insertAdjacentHTML("beforebegin", sizeOfArticle);
}
