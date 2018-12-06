class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    // Add a click handler to the button reference and call the toggleContent method.
    // Toggle the ".dropdown-hidden" class off and on

    this.element = element;
    
    
    this.button = this.element.querySelector('.dropdown-button');
    
    
    this.content = this.element.querySelector('.dropdown-content');
    
    
    this.button.addEventListener('click', () => {
      this.toggleContent();
    })
  }

  toggleContent() {
    
    
    this.content.classList.toggle('dropdown-hidden');
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

// Note to self: [Tab Components]  ********** Todays lesson above **********