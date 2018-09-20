class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    console.log(this.element);
    console.log(element);
    
    // TODO: Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    console.log(this.button);

    // TODO: assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    
    // TODO: Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
        this.toggleContent();    
    });
  }

  toggleContent() {
    
    // TODO: Toggle the ".dropdown-hidden" class off and on
    this.content;
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));