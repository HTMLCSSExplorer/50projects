const faq = document.querySelectorAll('.faq');
const btns = document.querySelectorAll('button');

btns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    btn.parentElement.classList.toggle('active');
  })
);

