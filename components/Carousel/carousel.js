class Carousel {
  constructor(element) {
    this.element = element;
    this.leftButton = element.querySelector('.carousel-control.left');
    this.rightButton = element.querySelector('.carousel-control.right')
    this.items = element.querySelectorAll('.box');
    console.log(this.items);
    this.current = 0;
    this.items[0].classList.add('active');
    this.length = this.items.length;
     this.rightButton.addEventListener('click', () => {
      this.navigate(1);
    });
    this.leftButton.addEventListener('click', () => {
      this.navigate(-1);
    });

  }

  navigate(direction) {
    this.items.forEach(item => item.classList.remove('active'));
    // if (direction === -1){
    //   this.classList.
    // }
    this.current += direction;
    if (direction === -1 && this.current < 0) {
      this.current = this.length -1;
    }
    if (direction === 1 && !this.items[this.current]) {
      this.current = 0;
    }
    this.items[this.current].classList.add('active');
  }
}

// let boxes = document.querySelectorAll('.box');
// let currentBox = 0;
// let isEnabled = true;

// function changeBox(n){
//   currentBox = (n + boxes.length) % boxes.length;
// }
//
// function nextBox(n){
//   hideBox('to-left');
//   changeBox(n+1);
//   showBox('from-right');
// }
//
// function previousBox(n){
//   hideBox('to-right');
//   changeBox(n-1);
//   showBox('from-left');
// }
//
// function hideBox(direction){
//   isEnabled = false;
//   boxes[currentBox].classList.add(direction);
//   boxes[currentBox].addEventListener('animationend', function(){
//     this.classList.remove('active', direction);
//   });
// }
//
// function showBox(direction){
//   boxes[currentBox].classList.add('next', direction);
//   boxes[currentBox].addEventListener('animationend', function(){
//     this.classList.remove('next', direction);
//     this.classList.add('active');
//     isEnabled = true;
//   })
// }
//
// document.querySelector('.carousel-control.left').addEventListener('click', function(){
//   if (isEnabled){
//     previousBox(currentBox);
//   }
// });
//
// document.querySelector('.carousel-control.right').addEventListener('click', function(){
//   if (isEnabled){
//     nextBox(currentBox);
//   }
// })

let carousel = new Carousel(document.querySelector('.carousel'));
// console.log(carousel);
//
// carousel = Array.from(carousel).map(box => {
//   console.log(carousel);
//   return new Carousel(box);
// });
//
//   console.log(carousel);
