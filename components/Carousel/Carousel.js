class Carousel {
  constructor(element){
    this.element = element;
    //grab prev and next button
    // this.prev = element.querySelector('.prev');
    // this.next = element.querySelector('.next');
    //slides
    this.slides = element.querySelectorAll('.slide-item');
    this.slides = Array.from(this.slides).map( slide => {
      return new Slide(slide, this);
    });

    this.autoSlide;
    //set first slide to active
    this.activeSlide = 0;
    this.init();
  }

  init(){
    this.slides[0].select();
    this.autoSlide = setInterval(this.next.bind(this), 6000);
  }

  updateActive(newPos) {
    this.slides[this.activeSlide].deselect();
    this.activeSlide = newPos;
  }

  prev(){
    let newPos = this.activeSlide - 1;
    if(newPos == -1){
      newPos = this.slides.length - 1;
    }
    this.updateActive(newPos);
    this.slides[newPos].select();
  }

  next(){
    let newPos = this.activeSlide + 1;
    if(newPos == this.slides.length){
      newPos = 0;
    }
    this.updateActive(newPos);
    this.slides[newPos].select();
  }
}

class Slide{
  constructor(slide, parent){
    this.slide = slide;
    this.carousel = parent;
  }

  select() {
    this.slide.classList.add('slide-active');
  }

  deselect() {
    this.slide.classList.remove('slide-active');
  }
}



let carousels = document.querySelectorAll('.carousel');

carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
