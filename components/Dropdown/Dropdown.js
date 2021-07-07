class Dropdown {
  constructor(element) {
    this.element = element; // assigns to the dom
    this.button = this.element.querySelector('.dropdown-button'); // button  = querySelector .drop-button
    this.content = this.element.querySelector('.dropdown-content'); // content = quersySElectro .drop-content
    this.button.addEventListener('click', this.toggleContent.bind(this));
  }

  toggleContent() {
    this.content.classList.toggle('dropdown-hidden');
  }
}

let dropdowns = document.querySelectorAll('.dropdown')
  .forEach(dropdown => new Dropdown(dropdown));