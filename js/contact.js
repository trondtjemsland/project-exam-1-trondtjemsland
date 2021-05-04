const nameError = document.querySelector(".nameError");
const passwordError = document.querySelector(".passwordError");
const emailError = document.querySelector(".emailError");
const addressError = document.querySelector(".addressError");

submit.onclick = function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const password = document.querySelector("#password").value.trim();
  const email = document.querySelector("#email").value.trim();

  //Trim  is working

  if (name.length > 10) {
    nameError.classList.add("hide");
    nameError.classList.remove("show");
  } else {
    nameError.classList.add("show");
    nameError.classList.remove("hide");
  }
  if (password.length >= 8) {
    passwordError.classList.add("hide");
    passwordError.classList.remove("show");
  } else {
    passwordError.classList.add("show");
    passwordError.classList.remove("hide");
  }

  if (validateEmail(email)) {
    emailError.classList.add("hide");
    emailError.classList.remove("show");
  } else {
    emailError.classList.add("show");
    emailError.classList.remove("hide");
  }
};

function validateEmail(emailAddy) {
  const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isEmailValid = emailExpression.test(emailAddy);
  return isEmailValid;
}

// function validateEmail(passwordValidation) {
//   const passwordNumberExpression = /^[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z]{8,}$";
//   const isPasswordValid = passwordNumberExpression.test(passwordValidation);
//   return isPasswordValid;
// }
