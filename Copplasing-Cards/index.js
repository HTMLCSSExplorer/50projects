const client_key = 'cDaEuJifmRdT7kQ6OGj6gq-I7yWSzYGnTPLyTFVRBOY';
// const url = `https://api.unsplash.com/photos/?client_id=${client_key}`;
const url = `https://api.unsplash.com/photos/?client_id=${client_key}`;

const panels = document.querySelectorAll('.panel');
async function getPhotos(i) {
  const res = await fetch(url);
  const data = await res.json();
  return await data[i].urls.regular;
}

async function displayPhoto(id) {
  return await getPhotos(id);
}

async function displayPhotosOnDOM() {
  const promises = Array.from(panels).map(async (panel) => {
    const id = panel.dataset.id;
    return await displayPhoto(id);
  });
  const imgURL = await Promise.all(promises);
  imgURL.forEach((url, index) => {
    panels[index].style.backgroundImage = `url("${url}")`;
  });
}
displayPhotosOnDOM();

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    if (!panel.classList.contains('active')) {
      removeActiveClasses();
      panel.classList.toggle('active');
    } else {
      removeActiveClasses();
    }
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => panel.classList.remove('active'));
}
