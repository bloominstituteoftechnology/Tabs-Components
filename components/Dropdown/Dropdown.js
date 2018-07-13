class Dropdown {
  constructor(element) {
    // assign this.element to the dropdown element
    this.element = element;
    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent()
    });
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    TweenMax.from(".dropdown-content", 3, {height:140, opacity:0});
    this.content.classList.toggle("dropdown-hidden");
    // TweenMax.to(".dropdown-content", 3, {height: 160, opacity:1});
  }
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));