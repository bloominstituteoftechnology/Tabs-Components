let boxes = document.querySelectorAll('.box');
let currentBox = 0;
let isEnabled = true;

function changeBox(n){
  currentBox = (n + boxes.length) % boxes.length;
}

function nextBox(n){
  hideBox('to-left');
  changeBox(n+1);
  showBox('from-right');
}

function previousBox(n){
  hideBox('to-right');
  changeBox(n-1);
  showBox('from-left');
}

function hideBox(direction){
  isEnabled = false;
  boxes[currentBox].classList.add(direction);
  boxes[currentBox].addEventListener('animationend', function(){
    this.classList.remove('active', direction);
  });
}

function showBox(direction){
  boxes[currentBox].classList.add('next', direction);
  boxes[currentBox].addEventListener('animationend', function(){
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  })
}

document.querySelector('.carousel-control.left').addEventListener('click', function(){
  if (isEnabled){
    previousBox(currentBox);
  }
});

document.querySelector('.carousel-control.right').addEventListener('click', function(){
  if (isEnabled){
    nextBox(currentBox);
  }
})
