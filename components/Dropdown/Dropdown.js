class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
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
    if (this.content.classList.contains("dropdown-hidden")) {
      TweenMax.to(menu, .25, {top: -250, opacity: 0, onComplete: () => {this.content.classList.remove("dropdown-hidden")}});
     } else {
      TweenMax.to(menu, .25, {top: 0, opacity: 1, onComplete: this.content.classList.add("dropdown-hidden")});
     }
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

