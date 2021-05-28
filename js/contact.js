// async function getContatctForm() {
//   const repsonse = await fetch(
//     "https://noroffcors.herokuapp.com/https://api.tjemsland.online/wp-json/wp/v2/pages/"
//   );
//   const jsonFromServer = await repsonse.json();
//   console.log(jsonFromServer);

//   for (let i = 0; i < 1; i++) {
//     console.log(jsonFromServer[i].content.rendered);
//     document.querySelector("main").innerHTML += `
//         ${jsonFromServer[i].content.rendered}
//     `;
//   }
// }

// getContatctForm();
// const form = document.querySelector('#contactForm');
// const submitBtn = document.querySelector('#submit');
const nameError = document.querySelector('.nameError');
const subjectError = document.querySelector('.subjectError');
const emailError = document.querySelector('.emailError');
const textError = document.querySelector('.textError');

submitBtn.onclick = function (event) {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const subject = document.querySelector('#subject').value.trim();
  const email = document.querySelector('#email').value.trim();
  const text = document.querySelector('#text').value.trim();

  //Trim  is working

  if (name.length > 4) {
    nameError.classList.add('hide');
    nameError.classList.remove('show');
  } else {
    nameError.classList.add('show');
    nameError.classList.remove('hide');
  }
  if (subject.length >= 8) {
    subjectError.classList.add('hide');
    subjectError.classList.remove('show');
  } else {
    subjectError.classList.add('show');
    subjectError.classList.remove('hide');
  }
  if (text.length >= 8) {
    textError.classList.add('hide');
    textError.classList.remove('show');
  } else {
    textError.classList.add('show');
    textError.classList.remove('hide');
  }

  if (validateEmail(email)) {
    emailError.classList.add('hide');
    emailError.classList.remove('show');
  } else {
    emailError.classList.add('show');
    emailError.classList.remove('hide');
  }

  let data = new FormData(form);
  console.log(data.get('email'));
};

function validateEmail(emailAddy) {
  const emailExpression =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const isEmailValid = emailExpression.test(emailAddy);
  return isEmailValid;
}

// const submitBtn = document.querySelector("#submit");

// function validateEmail(passwordValidation) {
//   const passwordNumberExpression = /^[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z]{8,}$";
//   const isPasswordValid = passwordNumberExpression.test(passwordValidation);
//   return isPasswordValid;
// }
