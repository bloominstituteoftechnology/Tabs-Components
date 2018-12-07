class Dropdown {
  constructor(element) {
    // Assign this.element to the dropdown element
    this.element = document.querySelector(".dropdown");
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', e => this.toggleContent(e));
  }

  toggleContent(e) {
    //Toggle the ".dropdown-hidden" class off and on
    if (this.content.classList.contains("dropdown-closed")) {
      this.content.classList.toggle("dropdown-closed");
      TweenMax.set(this.content, {
        height: "auto"
      });
      TweenMax.from(this.content, 0.75, { 
        height: 0,
        ease: Power1.easeOut
      });
     } else {
      TweenMax.to(this.content, 0.75, {
        height: 0,
        onComplete: () => this.content.classList.toggle("dropdown-closed")
      });
    }
  }
}

let dropdownElements = document.querySelectorAll('.dropdown');
let dropdowns = [];

dropdownElements.forEach(dropdownElement => {
  // Instantiate Dropdown components
  dropdowns.push(new Dropdown(dropdownElement));

  // Prevent closing the dropdown menu when clicking within its area
  dropdownElement.addEventListener("click", e => e.stopImmediatePropagation());
});

// Close the dropdown menu when clicking outside the menu itself
window.addEventListener("click", e => {
  dropdowns.forEach(dropdown => {
    if(!dropdown.content.classList.contains("dropdown-closed")) {
      TweenMax.to(dropdown.content, 0.75, {
        height: 0,
        onComplete: () => dropdown.content.classList.toggle("dropdown-closed")
      });
    }
  });
});