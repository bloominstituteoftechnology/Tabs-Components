
class Carousel {
    constructor() {
        this.element = document.querySelector('.carousel');
        this.leftBtn = this.element.querySelector('.left');
        this.rightBtn = this.element.querySelector('.right');
        this.slides = this.element.querySelectorAll('img');
        this.nextSlide; //This is an interval that automatically goes to the next slide
        this.activeSlide = document.querySelector('img[data-slide="1"');
        this.transitioning = false;
        this.initialize();
    }

    initialize() {
        this.rightBtn.addEventListener('click', () => this.moveRight());
        this.leftBtn.addEventListener('click', () => this.moveLeft());
        this.activeSlide.classList.remove('hidden');
        this.nextSlide = setInterval(() => {
            this.moveRight();
        }, 3000)
    }

    moveRight() {
        if(!this.transitioning) {
            let currentSlideData = Number(this.activeSlide.dataset.slide);
            let nextSlideData = currentSlideData + 1;
            let exitSlide = this.activeSlide;
            //exitSlide.classList.add('hidden');
            //If there isn't a slide after the current, loop back to the first
            if(document.querySelector(`img[data-slide="${nextSlideData}"`) === null) {
                this.activeSlide = document.querySelector(`img[data-slide="1"`);
            } else {
                //If there IS a slider after the current, go to that one.
                this.activeSlide = document.querySelector(`img[data-slide="${nextSlideData}"`);
            }
    
            this.animateCarousel(exitSlide, this.activeSlide);
        }
        
    }

    moveLeft() {
        if(!this.transitioning) {
            let currentSlideData = Number(this.activeSlide.dataset.slide);
            let nextSlideData = currentSlideData - 1;
            let exitSlide = this.activeSlide;
            //exitSlide.classList.add('hidden');
            //If there isn't a slide before the current, loop to the last
            if(document.querySelector(`img[data-slide="${nextSlideData}"`)  === null) {
                this.activeSlide = this.slides[this.slides.length - 1];
            } else {
                //If there IS a slider after the current, go to that one.
                this.activeSlide = document.querySelector(`img[data-slide="$    {nextSlideData}"`);
            }

            this.animateCarousel(exitSlide, this.activeSlide);
        }
        
    }

    animateCarousel(curr, next) {
        this.transitioning = true;
        TweenMax.fromTo(curr, .5, {
            opacity: 1
        }, {
            opacity: 0,
            onComplete: () => {
                curr.classList.add('hidden');
                next.classList.remove('hidden');
                TweenMax.fromTo(next, .5, {
                    opacity: 0
                }, {
                    opacity: 1,
                    onComplete: () => {
                        this.transitioning = false;
                    }
                });
            }
        });

        
    }
}

let slideCarousel = new Carousel();