class Dropdown {
  constructor(element) {

    this.element = element;
    this.button = document.querySelector('.dropdown-button');

    this.content = document.querySelector('.dropdown-content');
    this.button.addEventListener('click', ()=>{ this.toggleContent() });
    
  }

  toggleContent() {
    const classes = this.content.classList;
    classes.toggle('dropdown-hidden');
  }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));