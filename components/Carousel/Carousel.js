let activeImg = document.querySelector(".active");
activeImg.classList.toggle("carousel-item-show");

class CarouselImage {
    constructor(element) {
        this.element = element;
        this.nextButton = document.querySelector(".carousel-right-button");
        this.prevButton = document.querySelector(".carousel-left-button");
        this.nextButton.addEventListener("click", this.scrollToNext);
        this.prevButton.addEventListener("click", this.scrollToLast);
        if (this.element.dataset.img === 0) {
            this.prevImg = images[images.length - 1];
        } else {
            this.prevImg = images[this.element.dataset.img - 1];
        }
        if (this.element.dataset.img === images.length - 1) {
            this.nextImg = images[0];
        } else {
            this.nextImg = images[this.element.dataset.img + 1];
        }
    }

    scrollToNext() {
        // nextImg.classList.toggle("carousel-item-show");
        TweenMax.from(activeImg, 1, {x:0});
        TweenMax.to(activeImg, 1, {x:-800});
        TweenMax.from(this.nextImg, 1, {x:800});
        TweenMax.to(this.nextImg, 1, {x:0});
        activeImg.classList.toggle("carousel-item-show");
        activeImg = nextImg;
        activeImg.classList.toggle("carousel-item-show");

    }

    scrollToLast() {
        TweenMax.from(activeImg, 1, {x:0});
        TweenMax.to(activeImg, 1, {x:800});
        TweenMax.from(this.prevImg, 1, {x:-800});
        TweenMax.to(this.prevImg, 1, {x:0});
        activeImg.classList.toggle("carousel-item-show");
        activeImg = prevImg;
        activeImg.classList.toggle("carousel-item-show");

    }
}






let images = document.querySelectorAll(".carousel-item");
images = Array.from(images).map(item => new CarouselImage(item));