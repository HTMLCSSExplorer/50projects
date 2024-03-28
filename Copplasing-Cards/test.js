const clientKey = 'ayFALa8Cs6FYUthOL2ur4etGyLtQZw_DOYvXYe49e9w';
const searchURL = `https://api.unsplash.com/photos/random/?client_id=${client_key}`;

const authUnsplash = async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.urls.regular);
};

authUnsplash();
