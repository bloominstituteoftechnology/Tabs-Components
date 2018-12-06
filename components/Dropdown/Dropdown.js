class Dropdown {
  constructor(element) {
    // Assign this.element to the dropdown element
    this.element = document.querySelector('.dropdown');
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', e => {
      this.toggleContent(e)
    })
  }

  toggleContent(e) {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
    // Animation
    if (this.content.classList.contains('dropdown-hidden')) {
      TweenMax.to(this.content, 1, {
        bottom: 150,
        ease: Power0.easeOut,
      });
    } 
    else {
      TweenMax.from(this.content, 1.5, {
        top: 20,
        ease: Power0.easeOut,
      });
    }
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));