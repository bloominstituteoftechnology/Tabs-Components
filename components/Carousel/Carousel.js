class Carousel {
  constructor(element) {
    this.element = element;
    this.next = element.querySelector('.next');
    this.prev = element.querySelector('.prev');
    this.buttonSpan = element.querySelector('.buttonSpan')
    this.items = element.querySelectorAll('.box');
    this.current = 0;
    this.carouselLength = this.items.length;

    this.next.addEventListener('click', () => {
      this.navigate(1);
    })
    this.prev.addEventListener('click', () => {
      this.navigate(-1);
    })

    this.items[0].classList.add('box-active');
    this.buttonSpan.innerText = this.current + 1;
  }
  navigate(direction) {
    this.items.forEach(item => item.classList.remove('box-active'));
    this.current += direction;
    if (direction === -1 && this.current < 0) {
      this.current = this.carouselLength -1;
    }
    if (direction === 1 && !this.items[this.current]) {
      this.current = 0;
    }
    this.items[this.current].classList.add('box-active');
    TweenMax.from(this.items[this.current], 2, {opacity: 0, delay: 0.25});
    this.buttonSpan.innerText = this.current + 1;
  }
}

let carouselContainer = document.querySelectorAll('.section1');
carouselContainer = Array.from(carouselContainer).map(box => new Carousel(box));
