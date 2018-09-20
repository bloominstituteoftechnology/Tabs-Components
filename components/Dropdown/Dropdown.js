class Dropdown {
  constructor(element) {
    // Assign this.element to the dropdown element
    this.element = document.querySelector('.dropdown');
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent();
    })
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

// My notes on this

//line 23
  // Setting a variable called dropdowns to the html element(s) with the class dropdown: It is now a node lise
//line 24
  // the dropdown node list is being turned into an array using array.from(dropdowns)
  // We are mapping the now array to be a new object with the name Dropdown and passing in our original variable