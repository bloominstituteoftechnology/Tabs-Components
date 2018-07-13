class Dropdown {
  constructor(element) {
    // assign this.element to the dropdown element
    this.element = element;
    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = element.querySelector('.dropdown-button');
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = element.querySelector('.dropdown-content');
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', this.toggleContent.bind(this));
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    if (this.content.classList.contains('dropdown-hidden')) {
      this.content.classList.toggle('dropdown-hidden');
      TweenMax.fromTo('.dropdown-content', 2, {
        y: -250
      }, {
        y: 0
      });
    } else {
      TweenMax.fromTo('.dropdown-content', 2, {
        y: 0
      }, {
        y: -250,
        onComplete: () => this.content.classList.toggle('dropdown-hidden')
      });
    }
  }
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));