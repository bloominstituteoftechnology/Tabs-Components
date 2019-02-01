class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.dropdown-button');
    this.content = this.element.querySelector('.dropdown-content');
    this.button.addEventListener('click', () => this.toggleContent())
  }
  
  toggleContent() {
    this.content.classList.toggle('dropdown-hidden');
    !this.content.classList.contains('dropdown-hidden')
      ?TweenMax.to( this.content , 1, { y:425, rotation: 360} )
      :TweenMax.to( this.content , 2, { y:-425, rotation: -360} )
  }
}



let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));