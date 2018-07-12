let open = false;

class Dropdown {
  constructor(element) {
    // assign this.element to the dropdown element
    this.element = element;
    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = document.querySelector(".dropdown-button");
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = document.querySelector(".dropdown-content");
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener("click", () => {this.toggleContent()});
  }

  
  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.remove("dropdown-hidden");
    if (open === false) {
      
      TweenMax.from(this.content, 1, {y:-300});
      TweenMax.to(this.content, 1, {y:0});
      open = true;
    } else {
      TweenMax.from(this.content, 1, {y:0});
      TweenMax.to(this.content, 1, {y:-300});
      open = false;
      // setTimeout(turnClassOff, 2000);
    }
    
  }

  // turnClassOff() {
  //   this.content.classList.remove("dropdown-hidden");
  // }
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));