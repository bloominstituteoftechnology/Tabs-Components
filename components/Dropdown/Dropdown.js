
//Constructor function for new Dropdown class
class Dropdown {
  constructor(element) { 
    // Assigns this.element to the dropdown element
    this.element = element;   
    // Gets the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');    
    // Assigns the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');   
    // Adds a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      //Test Function //console.log('click it good!')
      this.toggleContent();
    })
  }
// Toggles the ".dropdown-hidden" class off and on
  toggleContent() { 
    this.content.classList.toggle('dropdown-hidden');
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));