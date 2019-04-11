class Dropdown {
  constructor(element) {
    // Assign this.element to the dropdown element
    this.element = element;
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");
    this.links = this.element.querySelectorAll(".dropdown-link");
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
        this.toggleContent()
    })
  }
  toggleContent() {
    if (this.content.classList.contains("dropdown-hidden")) {
      TweenMax.to(this.content, 2, { className: "-=dropdown-hidden",});
      this.links.forEach(link=> TweenMax.to(link, 2, { opacity: 1}));
    } else {
      console.log("it dont")
    // Toggle the ".dropdown-hidden" class off and on
      TweenMax.to(this.content, 1, {className: "+= dropdown-hidden"});
    }
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));