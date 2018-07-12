class Dropdown {
  constructor(divTag) {
    this.element = divTag;
    this.button = this.element.querySelector('.dropdown-button');
    this.content = this.element.querySelector('.dropdown-content');
    // bind this to the button
    this.button.addEventListener('click', this.toggleContent.bind(this));
    this.button.addEventListener('click', this.animateButton.bind(this));
    this.button.addEventListener('click', this.animateMenu.bind(this));
  }

  toggleContent() {
    this.content.classList.toggle('dropdown-hidden');
  }

  animateButton() {
    this.content.classList.contains('dropdown-hidden') 
      ? TweenMax.to(this.button, 0.5, { opacity:1.0 })
      : TweenMax.to(this.button, 0.5, { opacity:0.2 })
    ;
  }

  animateMenu() {
    this.content.classList.contains('dropdown-hidden') 
      ? TweenMax.to(this.content, 1, { width:0, opacity:0.1 })
      : TweenMax.to(this.content, 1, { width:150, opacity:1 })
    ;
  }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( (dropdown) => {
  return new Dropdown(dropdown)
});