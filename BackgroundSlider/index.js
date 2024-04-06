/**
https://plus.unsplash.com/premium_photo-1676009619407-18a5121f9687?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
https://plus.unsplash.com/premium_photo-1674984909531-7b3ac0035e60?q=80&w=1675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
*/
const body = document.body;
const slides = document.querySelectorAll('.slide');
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');

let activeSlide = 1;
setBgToBody();
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[activeSlide].classList.add('active');
}

rightBtn.addEventListener('click', (e) => {
  e.preventDefault();
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener('click', (e) => {
  e.preventDefault();
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length;
  }
  setBgToBody();
  setActiveSlide();
});
