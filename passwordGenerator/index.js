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
  console.log(pass);
};

password(20);
