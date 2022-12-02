const userName = document.querySelector(`#name-output`);
const input = document.querySelector(`#name-input`);

input.addEventListener(`input`, changeName);

function changeName() {
  if (input.value) {
    userName.textContent = input.value;
  } else userName.textContent = "Anonymous";
}
