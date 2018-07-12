class Dropdown {
  constructor(divTag) {
    this.element = divTag;
    this.button = this.element.querySelector('.dropdown-button');
    this.content = this.element.querySelector('.dropdown-content');
    // bind this to the button
    this.button.addEventListener('click', this.toggleContent.bind(this));
  }

  toggleContent(content) {
    this.content.classList.toggle('dropdown-hidden');
  }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( (dropdown) => {
  return new Dropdown(dropdown)
});