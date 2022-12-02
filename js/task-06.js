const input = document.querySelector(`#validation-input`);
console.log(input);

input.addEventListener(`blur`, checkNumberOfSymbol);

function checkNumberOfSymbol() {
  if (input.value.length !== Number(input.dataset.length)) {
    input.classList.add(`invalid`);
  } else input.classList.replace(`invalid`, `valid`);
}
