
class Carousel {
    constructor() {
        this.element = document.querySelector('.carousel');
        this.leftBtn = this.element.querySelector('.left');
        this.rightBtn = this.element.querySelector('.right');
        this.slides = this.element.querySelectorAll('img');
        this.activeSlide = document.querySelector('img[data-slide="1"');
        this.timeBar = document.querySelector('.time-bar');
        this.transitioning = false;
        this.initialize();
    }

    initialize() {
        this.rightBtn.addEventListener('click', () => this.moveRight());
        this.leftBtn.addEventListener('click', () => this.moveLeft());
        this.activeSlide.classList.remove('hidden');
        this.timeBarStart();
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
            this.timeBarReset();
            this.animateCarousel(exitSlide, this.activeSlide);
        }
        
    }

    moveLeft() {
        if(!this.transitioning) {
            TweenMax.killAll();
            this.timeBar.style.width = '0%';
            let currentSlideData = Number(this.activeSlide.dataset.slide);
            let nextSlideData = currentSlideData - 1;
            let exitSlide = this.activeSlide;
            //exitSlide.classList.add('hidden');
            //If there isn't a slide before the current, loop to the last
            if(document.querySelector(`img[data-slide="${nextSlideData}"`)  === null) {
                this.activeSlide = this.slides[this.slides.length - 1];
            } else {
                //If there IS a slider after the current, go to that one.
                this.activeSlide = document.querySelector(`img[data-slide="${nextSlideData}"`);
            }

            this.animateCarousel(exitSlide, this.activeSlide);
        }
        
    }

    animateCarousel(curr, next) {
        let exit = curr;
        let nextSlide = next;
        this.transitioning = true;
        TweenMax.fromTo(exit, .5, {
            opacity: 1
        }, {
            opacity: 0,
            onComplete: () => {
                exit.classList.add('hidden');
                nextSlide.classList.remove('hidden');
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

    timeBarStart() {
        let maxWidth = document.querySelector('.carousel-images').clientWidth;
        TweenMax.fromTo(this.timeBar, 4, {width: '0%', ease: Power0.easeNone}, {
            width: maxWidth,
            onComplete: () => {
                this.moveRight();
                this.timeBarReset();
            }
        });
    }

    timeBarReset() {
        TweenMax.to(this.timeBar, 1, {
            width: '0%',
            onComplete: () => {
                this.timeBarStart();
            }
        });
    }
}

let slideCarousel = new Carousel();