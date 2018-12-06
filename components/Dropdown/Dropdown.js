let dropActive = false;

class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.dropdown-button');
    this.content = this.element.querySelector('.dropdown-content');
    this.button.addEventListener('click', () => {
      this.toggleContent();
    })
  }
  toggleContent() {
    if(!dropActive){
      // this.content.classList.toggle('dropdown-hidden');
      dropActive = true;
      console.log(dropActive);
      TweenMax.to(".dropdown-content", .5, {top:55})
    }else if(dropActive){
      dropActive = false;
      console.log(dropActive);
      TweenMax.to(".dropdown-content", .2, {top:-170})
    }

  }
}
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));