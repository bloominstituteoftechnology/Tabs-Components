class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element HTML for context) (look at th
    this.button = this.element;
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = document.querySelector('.dropdownContent');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent()); 
    }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle(".dropdownHidden");
    this.content.classList.toggle(".dropdownLink");
  };
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));