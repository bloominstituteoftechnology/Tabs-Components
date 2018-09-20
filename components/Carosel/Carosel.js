

//== Carosel Component =========================================================

class Carosel {
    constructor (containerElement){
        this.element = containerElement;
        this.position = 0;
        // Empty div of box elements. Prep boxes as frames.
        this.slides = [];
        this.frame = document.createElement('div');
        this.frame.classList.add('carosel-frame');
        this.element.querySelectorAll('.box').forEach(slideElement => {
            slideElement.classList.add('carosel-slide');
            this.frame.appendChild(slideElement);
            this.slides.push(slideElement);
        });
        this.currentSlide = this.slides[0];
        this.currentSlide.classList.add('carosel-slide--show');
        // Populate div with arrows and frame
        this.arrowLeft  = document.createElement('img');
        this.arrowRight = document.createElement('img');
        this.arrowLeft.src  = 'img/nav_left.png' ;
        this.arrowRight.src = 'img/nav_right.png';
        this.element.appendChild(this.arrowLeft );
        this.element.appendChild(this.frame     );
        this.element.appendChild(this.arrowRight);
        // Setup event listeners
        this.arrowLeft .addEventListener('click', () => {
            this.slide(-1);
        });
        this.arrowRight.addEventListener('click', () => {
            this.slide(1);
        });
    }
    slide(direction) {
        this.position += direction;
        if(this.position < 0){ this.position += this.slides.length;}
        if(this.position >= this.slides.length){ this.position = 0;}
        //
        this.currentSlide.classList.remove('carosel-slide--show');
        this.currentSlide = this.slides[this.position];
        this.currentSlide.classList.add('carosel-slide--show');
    }
}

new Carosel(document.querySelector('.carosel'));
