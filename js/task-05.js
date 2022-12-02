const userName = document.querySelector(`#name-output`);
const input = document.querySelector(`#name-input`);

input.addEventListener(`input`, () => (userName.textContent = input.value));
