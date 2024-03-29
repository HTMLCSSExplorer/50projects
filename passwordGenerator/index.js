const generateBtn = document.querySelector('button');
const smalLetters = 'abcdefghijklmnopqrstuvwxyz';
const upLetters = smalLetters.toUpperCase();
const signs = '~!@#$%^&*()_+';
const numbers = '1234567890';
const allLetters = smalLetters + upLetters + signs + numbers;
// console.log(allLetters);

const getRandomIndex = (len) => {
  return Math.floor(Math.random() * allLetters.length);
};

const password = (len) => {
  let pass = '';
  for (let i = 0; i < len; i++) {
    pass = pass + allLetters[getRandomIndex()];
  }
  return pass;
};

const generatePassword = (e) => {
  e.preventDefault();
  const passwordLength = document.querySelector('#password-length').value;
  if (passwordLength.trim() > 6 && passwordLength.trim() < 50) {
    const newPassword = password(passwordLength);

    document.querySelector('#password-length').value = '';
    document.querySelector('.pass-test').textContent = newPassword;
  } else {
    document.querySelector('.pass-test').textContent =
      'Enter a number larger than 6, and smaller than 50';
  }
};
generateBtn.addEventListener('click', generatePassword);
