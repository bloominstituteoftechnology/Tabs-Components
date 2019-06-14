class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
<<<<<<< HEAD
    //this.button = this.element.querySelector();
=======
    this.button = this.element.querySelector('.dropdown-button');
>>>>>>> 139a987f48b5588d8fd02ec27403ec53e944e825
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = document.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {

    })
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.content;
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
//let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));