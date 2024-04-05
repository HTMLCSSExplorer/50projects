const form = document.querySelector('#form');
const search = document.querySelector('#search');

//
const API_KEY = '70178f24fe44e627f79864d72e8ba4cb';
const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDE3OGYyNGZlNDRlNjI3Zjc5ODY0ZDcyZThiYTRjYiIsInN1YiI6IjY0ZmQzOWU4NjY0NjlhMDBlMzQ5MDZjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.npaNurWwxQuPqMAq8C693X0slJnZNi9ZhZoLrv7c_ts';
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1`;

const SEARCH_QUERY = 'john wick';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&include_adult=false&language=en-US&page=1&query="`;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};
//  initially gets a list of first 20 popular movies
const getMovies = async (url) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Something went wrong.');
    }
    const data = await response.json();
    const movies = data.results;
    showMovies(movies);
  } catch (error) {
    console.log(error);
  }
};

// adds the fetched movies to DOM
function showMovies(movies) {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
   
  <img src="${IMG_PATH + poster_path}" alt="" />
  <div class="movie-info">
    <h3 class="movie-title">${title}</h3>
    <span class="green">${vote_average}</span>
  </div>
  <div class="overview">
    <h3 class="">Overview</h3>
    <p>${overview}</p>
  </div>
</div>
    `;

    main.appendChild(movieEl);
  });
}

// Init
getMovies(API_URL);
// Search for Movies
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searcTerm = search.value;
  if (searcTerm && searcTerm.trim() !== '') {
    getMovies(SEARCH_API + searcTerm);
    searcTerm.value = '';
  } else {
    window.location.reload();
  }
});
