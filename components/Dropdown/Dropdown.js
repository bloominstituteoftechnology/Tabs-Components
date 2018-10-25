let once = { once: false };
class Dropdown {
  constructor(element) {
    // Assign this.element to the dropdown element
    this.element = element;

    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(`.dropdown-button`);
    console.log(this.button);
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(`.dropdown-content`);
    console.log(this.content);
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent();
    });

    this.tween = TweenMax.to('.dropdown-content', 1, {
      rotationY: 360,
      ease: Power1.easeInOut
    });
  }

  toggleContent() {
    event.preventDefault();
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle(`dropdown-hidden`);
    this.content.classList.tween;
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));
