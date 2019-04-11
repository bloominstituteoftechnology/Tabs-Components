//Global variable to keep track of what slide we are supposed to be seeing. (Side note: not sure if there is a better way to keep track of this)
let currSlide = 1;

class SliderArrow {
  constructor(arrow) {
    this.arrow = arrow;
    //Find all slides and create an Array from a Nodelist so we can use .map
    this.slideItems = Array.from(document.querySelectorAll('.slide'));
    
    //Create new variable to hold the new mapped Array of Slide objects
    this.newSlideItems = this.slideItems.map(slide => new Slide(slide));

    //Create click event listener to arrows
    this.arrow.addEventListener('click', _ => this.newSlide());
  }

  newSlide() {
    const oldSlide = currSlide;

    //Check if arrow is left or right arrow using .contains on the classList
    if(this.arrow.classList.contains('right')) {
      //Make sure we can click either arrow forever and it will loop either way
      if(currSlide < 3){
        currSlide++;
        this.newSlideItems[oldSlide-1].changeSlide();
      } else {
        currSlide = 1;
        this.newSlideItems[oldSlide-1].changeSlide();
      }
    } else {
      if(currSlide > 1){
        currSlide--;
        this.newSlideItems[oldSlide-1].changeSlide();
      } else {
        currSlide = 3;
        this.newSlideItems[oldSlide-1].changeSlide();
      }
    }
  }
}

// Create Slide Class
class Slide {
  constructor(slide){
    this.slide = slide;
  }

  changeSlide(){
    // Set the slide we were just on to display: none by using the DOM Object passed into the class (aka: slide) to remove the class that sets its display to block
    this.slide.classList.remove('slide-show');
    // Set the current slide display: block by selecting it with its data-slide tag and then using classList add the .slide-show class
    document.querySelector(`.slide[data-slide="${currSlide}"]`).classList.add('slide-show');
  }
}

//Find Left & Right Arrow Controls & Create new SlideArrow Objects
const slideArrows = document.querySelectorAll('.carousel .fas').forEach(arrow => new SliderArrow(arrow));