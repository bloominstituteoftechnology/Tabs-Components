class Dropdown {
  constructor(dropdown) {
    // assign this.element to the dropdown element
    this.element = dropdown;
    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {this.toggleContent()});
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    TweenMax.from(this.content, 1, {height:0});
    TweenMax.to(this.content, 1, {height:160});

    this.content.classList.toggle('dropdown-hidden');

    let children = this.content.children;
    children = Array.from(children).forEach( child => this.childAppear(child));
  }

  childAppear(cb) {
    TweenMax.from(cb, 0.1, {opacity:0});
    TweenMax.to(cb, 2, {opacity:1});
  }
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));