class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.images = this.carousel.querySelectorAll('img');
        this.images = Array.from(this.images).map(img => new Image(img, this));
        this.activeImg = this.images[0];

        this.left = this.carousel.querySelector('.left-button');
        this.left.addEventListener('click', () => this.shiftLeft());
        this.right = this.carousel.querySelector('.right-button');
        this.right.addEventListener('click', () => this.shiftRight());

        this.init();
    }

    init() {
        this.activeImg.activate();
    }

    shiftLeft() {
        this.activeImg.deactivate();

        let length = this.images.length;
        let index = this.activeImg.index;
        if (index == 1) this.activeImg = this.images[length - 1];
        else this.activeImg = this.images[index - 2];

        this.activeImg.activateLeft();
    }
    shiftRight() {
        this.activeImg.deactivate();

        let length = this.images.length;
        let index = this.activeImg.index;
        if (index == length) this.activeImg = this.images[0];
        else this.activeImg = this.images[index];

        this.activeImg.activate();
    }
}

class Image {
    constructor(img, carousel) {
        this.img = img;
        this.carousel = carousel;
        this.index = this.img.dataset.tab;
    }

    activate() {
        TweenMax.fromTo(this.img, 1, {x: 1500, autoAlpha: .2}, {x: 0, autoAlpha: 1, ease: Power4.ease});
        this.img.style.display = 'flex';
    }
    activateLeft() {
        TweenMax.fromTo(this.img, 1, {x: -1500, autoAlpha: .2}, {x: 0, autoAlpha: 1, ease: Power4.ease});
        this.img.style.display = 'flex';
    }

    deactivate() {
        this.img.style.display = 'none';
    }
}

let carousels = document.querySelectorAll('.carousel');
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));