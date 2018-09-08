class Dropdown {
  constructor(element) {
    // Assign this.element to the dropdown element
    this.element = element;

    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");

    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener("click", () => {
      this.toggleContent();
    });
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    // this.content.classList.toggle('dropdown-hidden');
    
    if (x === 0) {
      TweenMax.to(this.content, 1, {
        opacity: 1,
        left: 0,
        rotation: 360,
        ease: Back.easeOut.config(1.7)
      });
      x++;
    } else if (x === 1) {
      TweenMax.to(this.content, 1, {
        opacity: 0,
        left: -160,
        rotation: 180,
      });
      x--;
    }
  }
}
let x = 0;
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll(".dropdown");
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));
dropdowns[0].content.style.skewX = '90deg';
