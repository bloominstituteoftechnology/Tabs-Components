
class Carousel {
    constructor() {
        this.element = document.querySelector('.carousel');
        this.leftBtn = this.element.querySelector('.left');
        this.rightBtn = this.element.querySelector('.right');
        this.slides = this.element.querySelectorAll('img');
        this.nextSlide; //This is an interval that automatically goes to the next slide
        this.activeSlide = document.querySelector('img[data-slide="1"');
        this.initialize();
    }

    initialize() {
        this.rightBtn.addEventListener('click', () => this.moveRight());
        this.activeSlide.classList.remove('hidden');
        this.nextSlide = setInterval(() => {
            this.moveRight();
        }, 3000)
    }

    moveRight() {
        let currentSlideData = Number(this.activeSlide.dataset.slide);
        let nextSlideData = currentSlideData + 1;
        this.activeSlide.classList.add('hidden');
        //If there isn't a slide after the current, loop back to the first
        if(document.querySelector(`img[data-slide="${nextSlideData}"`) === null) {
            this.activeSlide = document.querySelector(`img[data-slide="1"`);
        } else {
            //If there IS a slider after the current, go to that one.
            this.activeSlide = document.querySelector(`img[data-slide="${nextSlideData}"`);
        }
        this.activeSlide.classList.remove('hidden');
    }
}

let slideCarousel = new Carousel();