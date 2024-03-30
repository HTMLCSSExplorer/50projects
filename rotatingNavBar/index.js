const mentBtn = document.querySelector('.circle');
const container = document.querySelector('.container');
const icon = document.querySelector('.fas');

mentBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!container.classList.contains('show-nav')) {
    container.classList.add('show-nav');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    container.classList.remove('show-nav');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  }
});
