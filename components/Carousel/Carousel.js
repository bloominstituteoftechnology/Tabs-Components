class GalleryIcon {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.gallery;
    this.imageElement = document.querySelector(`.carousel-image[data-gallery='${this.data}']`);
    this.imageSlide = new ImageSlide(this.imageElement);
    this.element.addEventListener('click', () => {this.select()})
  }

  select() {
    const imageIcons = document.querySelectorAll('.carousel-image-icon');
    imageIcons.forEach(icon => {
      icon.classList.remove('active');
      this.imageSlide.element.classList.remove('image-active');
      console.log(this.imageSlide);
      
    });
    this.element.classList.add('active');
    // this.element.imageSlide.classList.add('image-active');
    this.imageSlide.select();
  }
}

class ImageSlide {
  constructor(element) {
    this.element = element;
  }

  select() {
    let imageSlideElements = document.querySelectorAll('carousel-image');
    imageSlideElements.forEach(slideElement => {
      slideElement.classList.remove('image-active');
    });
    this.element.classList.add('image-active');
  }
}

let icons = document.querySelectorAll('.carousel-image-icon');
// console.log(document.querySelector('.carousel-image-icon'));

icons = Array.from(icons).map( icon => new GalleryIcon(icon));
// console.log(icons);

icons[0].select();
