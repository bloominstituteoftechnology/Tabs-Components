class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('.dropdown-button');
    this.content = this.element.querySelector('.dropdown-content');
    // bind this to the button
    this.button.addEventListener('click', () => this.toggleContent(event));
  }

  toggleContent() {
    this.content.classList.toggle('dropdown-hidden');
  }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( (dropdown) => new Dropdown(dropdown));