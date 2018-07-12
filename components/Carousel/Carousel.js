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
            this.prevImg = images.length - 1;
        } else {
            this.prevImg = this.element.dataset.img - 1;
        }
        if (this.element.dataset.img === images.length - 1) {
            this.nextImg = images[0];
        } else {
            this.nextImg = this.element.dataset.img + 1;
        }
    }

    scrollToNext() {
        this.nextImg.classList.toggle("carousel-item-show")
        TweenMax.from(this.activeImg, 1, {x:0});
        TweenMax.to(this.activeImg, 1, {x:-600});
        TweenMax.from(this.nextImg, 1, {x:600});
        TweenMax.to(this.nextImg, 1, {x:0});
        activeImg.classList.toggle("carousel-item-show");
        activeImg = this.nextImg;
        activeImg.classList.toggle("carousel-item-show");

    }

    scrollToLast() {
        TweenMax.from(activeImg, 1, {x:0});
        TweenMax.to(activeImg, 1, {x:600});
        TweenMax.from(prevImg, 1, {x:-600});
        TweenMax.to(prevImg, 1, {x:0});
        activeImg.classList.toggle("carousel-item-show");
        activeImg = prevImg;
        activeImg.classList.toggle("carousel-item-show");

    }
}






let images = document.querySelectorAll(".carousel-item");
images = Array.from(images).map(item => new CarouselImage(item));