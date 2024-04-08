const btns = document.querySelectorAll('.btn');

function myFunction(e) {
  const x = e.clientX;
  const y = e.clientY;

  const btnTop = e.target.offsetTop;
  const btnLeft = e.target.offsetLeft;

  const xInside = x - btnLeft;
  const yInside = y - btnTop;

  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.left = xInside + 'px';
  circle.style.top = yInside + 'px';

  this.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 1000);
}

btns.forEach((btn) => {
  btn.addEventListener('click', myFunction);
});
