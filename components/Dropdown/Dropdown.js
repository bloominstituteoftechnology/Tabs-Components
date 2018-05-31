class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = dropdownbtn;
    this.content = dropdownContent;
    this.button.addEventListener("click", () => {
      this.toggleContent();
    })
  }

  toggleContent() {
    this.content.classList.toggle("dropdown-hidden");
  }
}
let dropdownContent = document.querySelector('.dropdown-content')
let dropdownbtn = document.querySelector('.dropdown-button')
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));
