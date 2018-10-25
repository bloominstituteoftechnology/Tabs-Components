class Dropdown {
  constructor(element) {

    // Assign this.element to the dropdown element
    this.element = element;

    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');

    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');

    this.state = false;

    // Add a click handler to the button reference and call the toggleContent method.
    this.element.addEventListener('mouseenter', () => {
      this.toggleContent();
    });
    this.element.addEventListener('mouseleave', () => {
      this.toggleContent();
    });
  }

  toggleContent() {

    // Toggle the ".dropdown-hidden" class off and on

    this.state = !this.state;

    if (this.state) {

      this.content.classList.remove('dropdown-hidden');
      TweenMax.to(this.content, 0.5, {css: {opacity: 1, marginTop: '0px'}});

    }

    else {

      TweenMax.to(this.content, 0.5, {css: {opacity: 0, marginTop: '-20px'}, onComplete: () => this.content.classList.add('dropdown-hidden')});

    }

  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));
