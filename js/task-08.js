const submitForm = document.querySelector(".login-form");
submitForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget.elements;

  if (!formElement.email.value || !formElement.password.value) {
    alert("Dude, fill in all the fields");
  }

  // const email = formElement.email.value;
  // const password = formElement.password.value;
  // const formData = {
  //   email,
  //   password,
  // };

  const formData = new FormData(event.currentTarget);

  console.log(formData);
  submitForm.reset();
}
