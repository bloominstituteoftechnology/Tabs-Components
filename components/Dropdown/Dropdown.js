class Dropdown {
  constructor(element) {
    // assign this.element to the dropdown element
    this.element;
    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button;
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content;
    // Add a click handler to the button reference and call the toggleContent method.
    
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content;
  }
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown)); 