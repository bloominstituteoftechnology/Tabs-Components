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
   this.boxes[this.index].classList.remove('box-left'); 
   this.boxes[this.index].classList.remove('box-right'); 
   if(this.index === 0) this.index = this.boxes.length-1;
   else this.index --;
   this.boxes[this.index].classList.add('box-right');
 }

 nextPage() {
   this.boxes[this.index].classList.remove('box-left'); 
   this.boxes[this.index].classList.remove('box-right'); 
   if(this.index === this.boxes.length-1) this.index = 0;
   else this.index ++;
   this.boxes[this.index].classList.add('box-left');
 }
}


const carousel = new Carousel(document.querySelector('.carousel'));
