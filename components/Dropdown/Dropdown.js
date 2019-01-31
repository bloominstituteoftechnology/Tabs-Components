class Dropdown {
  constructor(element) {
    // Assign this.element to the dropdown element
    this.element = element;

    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");

    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");
    this.show = false; // GSAP

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener("click", () => this.toggleContent());
  }

  toggleContent() {
    // GSAP
    if (this.show === false) {
      this.show = true;
      TweenMax.to(this.content, 0, { display: "flex" });
      TweenMax.to(this.content, 2, { opacity: 1 });
    } else {
      this.show = false;
      TweenMax.to(this.content, 0.5, { opacity: 0, display: "none" });
    }
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document
  .querySelectorAll(".dropdown")
  .forEach(dropdown => new Dropdown(dropdown));
