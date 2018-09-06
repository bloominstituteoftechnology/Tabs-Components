class CarouselImage {
    constructor(image) {
      this.image = image;
    };
  };
  
  class DirectionalButton {
    constructor(button) {
      this.directionalButton = button;
      this.direction = this.directionalButton.innerText;
      this.directionalButton.addEventListener("click", () => this.select());
    }

    findDisplayBlock(item) {
        return item.image.style.display === "block";
    }

    select() {
        let indexOfBlockImage = images.findIndex(this.findDisplayBlock);
        
        for (let i = 0; i < images.length; i++) {
            images[i].image.style.display = "none";
        }
        
        if (this.direction === "LEFT") {
            if (indexOfBlockImage === images.length - 1) {
                images[0].image.style.display = "block";
                TweenMax.fromTo(images[0].image, 1, {x: 100, opacity: 0}, {x:0, opacity: 1});
            } else {
                images[indexOfBlockImage + 1].image.style.display = "block";
                TweenMax.fromTo(images[indexOfBlockImage + 1].image, 1, {x: 100, opacity: 0}, {x:0, opacity: 1});
            }
        } else {
            if (indexOfBlockImage === 0) {
                images[images.length - 1].image.style.display = "block";
                TweenMax.fromTo(images[images.length - 1].image, 1, {x: -100, opacity: 0}, {x:0, opacity: 1});
            } else {
                images[indexOfBlockImage - 1].image.style.display = "block";
                TweenMax.fromTo(images[indexOfBlockImage - 1].image, 1, {x: -100, opacity: 0}, {x:0, opacity: 1});
            }
        }
    }
  }
  
  let images = document.querySelectorAll(".carousel-images");
  images = Array.from(images).map(img => new CarouselImage(img));

  let directionalButtons = document.querySelectorAll(".directional-button");
  buttons = Array.from(directionalButtons).map(button => new DirectionalButton(button));
  
  for (let i = 0; i < images.length; i++) {
      images[i].image.style.display = "none";
  }
  images[0].image.style.display = "block";
