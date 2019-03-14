class Carousel {
  constructor(element) {
    this.element = element;
    this.boxes = element.querySelectorAll('.box');

    this.previous = element.querySelector('.previous');
    this.next = element.querySelector('.next');
    this.index = 0;
    
    this.previous.addEventListener('click', () => this.previousPage());
    this.next.addEventListener('click', () => this.nextPage());
  }

  previousPage() {
    // Keep track of index of image sliding out
    const  current = this.index;

    // Get current image out to the left
    TweenMax.to(this.boxes[this.index], 1, {xPercent:-100, opacity: 0, ease: Power4.easeOut});
    TweenMax.to(this.boxes[this.index], 1, {xPercent:0, delay:1});
    setTimeout(() => {
      // Make current image display: none, after image is out
      this.boxes[current].classList.remove('box-show');
    }, 1000);  

    //Go to previous image
    if(this.index === 0) this.index = this.boxes.length-1;
    else this.index --;

    //Make previous image show, and slide into view from the right
    setTimeout(() => {
      this.boxes[this.index].classList.add('box-show');  
      this.boxes[this.index].style.opacity = 1;
      TweenMax.from(this.boxes[this.index], 1, {xPercent:100, opacity:0, ease: Power2.easeOut});
    }, 1000);  
 }

 nextPage() {
   // Keep track of index of image sliding out
   const  current = this.index;

   // Get current image out to the right
   TweenMax.to(this.boxes[this.index], 1, {xPercent:100, opacity: 0,ease: Power4.easeOut});
   TweenMax.to(this.boxes[this.index], 1, {xPercent:0, delay:1});
   setTimeout(() => {
     // Make current image display: none, after image is out
     this.boxes[current].classList.remove('box-show');
   }, 1000);  

   // go to next image
   if(this.index === this.boxes.length-1) this.index = 0;
   else this.index ++;

   //Make next image show, and slide into view from the left
  setTimeout(() => {
    this.boxes[this.index].classList.add('box-show');  
    this.boxes[this.index].style.opacity = 1;
    TweenMax.from(this.boxes[this.index], 1, {xPercent:-100, opacity:0, ease: Power2.easeOut});
  }, 1000);
 }
}


const carousel = new Carousel(document.querySelector('.carousel'));
