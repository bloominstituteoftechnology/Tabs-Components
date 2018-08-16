

class Dropdown {
  constructor(dropdown) {
    // Assign this.element to the dropdown element
    this.element = dropdown;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.dropdown = this.element.querySelector('.dropdown-button');
    console.log(this.dropdown);
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    console.log(this.content);
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.dropdown.addEventListener('click', (e) => {
      console.log("Calling the toggleContest method.");
      this.toggleContent();
    })
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    console.log("Toggled the dropdown menu.");
    this.content.classList.toggle('dropdown-hidden');
    console.log(this.content);
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));