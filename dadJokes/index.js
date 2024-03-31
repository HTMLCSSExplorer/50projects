const btn = document.querySelector('.btn');

const endPoint = `https://icanhazdadjoke.com`;
const options = {
  headers: {
    Accept: 'application/json',
  },
};
const getJoke = async () => {
  const res = await fetch(endPoint, options);
  try {
    if (!res.ok) {
      throw new Error('Something went Wrong!');
    }
    const newJoke = await res.json();
    document.querySelector('.small').innerText = `Joke ID:  ${newJoke.id}`;
    document.querySelector('#joke').innerText = newJoke.joke;
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  getJoke();
});

