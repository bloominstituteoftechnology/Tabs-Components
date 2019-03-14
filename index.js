//NEXT button
function nextSlide() {
  if(carousel.style.left !== '-640px') {
    TweenMax.fromTo(carousel, 1, {css: {left: 0}}, {css:{left: -640}});
  }
}

function prevSlide() {
  if(carousel.style.left !== '0px') {
    TweenMax.fromTo(carousel, 1, {css: {left: -640}}, {css:{left: 0}});
  }
}

function slide() {
}

const carousel = document.querySelector('.carousel');
carousel.style.left = '0px';
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', () => nextSlide());
prev.addEventListener('click', () => prevSlide());
