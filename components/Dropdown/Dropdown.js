class Dropdown {
  constructor(element) {
    // assign this.element to the dropdown element
    this.element = element;
    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.Button = this.element.querySelector('.dropdown-button');
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    // Add a click handler to the button reference and call the toggleContent method.
    this.Button.addEventListener('click', () => {this.toggleContent()});
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
  console.log('hello');
  this.content.classList.toggle('dropdown-hidden');
  TweenMax.to(this.content, 2, { y: 25 });
  Tween.reverse();
  }
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));