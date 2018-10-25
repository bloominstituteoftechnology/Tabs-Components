class Carousel {
  constructor(carouselElement) {
    this.element = carouselElement;
    this.images = this.element.querySelectorAll('.box');
    this.currentIndex = 0;
    this.images[this.currentIndex].style.display = 'block';
    
    this.leftButton = this.element.querySelector('.left');
    this.rightButton = this.element.querySelector('.right');

    this.leftButton.addEventListener('click', () => this.moveLeft());
    this.rightButton.addEventListener('click', () => this.moveRight());
  }

  moveLeft() {
    if (this.currentIndex > 0) {
      this.images[this.currentIndex].style.display = 'none';
      this.currentIndex--;
      this.images[this.currentIndex].style.display = 'block';
    }
  }

  moveRight() {
    if (this.currentIndex < this.images.length - 1) {
      this.images[this.currentIndex].style.display = 'none';
      this.currentIndex++;
      this.images[this.currentIndex].style.display = 'block';
    }
  }
}

class Image {
  constructor(imageElement) {
    this.element = imageElement;
  }

  show() {
    this.element.style.display = 'block';
  }

  display() {
    this.element.style.display = 'none';
  }
}

const carousel = new Carousel(document.querySelector('.carousel'));