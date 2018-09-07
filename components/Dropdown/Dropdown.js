class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.dropDownContent = this.element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      return this.toggleDropDownContent();
    })
  }
  toggleDropDownContent() {
    // Toggle the ".dropdown-hidden" class off and on
    let display = this.dropDownContent.style.display;
    if (display === "flex") {
    this.dropDownContent;
      TweenMax.fromTo(this.dropDownContent, 1, {y: 0, opacity: 1, display: "flex"}, {y: -150, opacity: 0, display: "none"});
    } else {
      TweenMax.fromTo(this.dropDownContent, 1, {y: -150, opacity: 0, display: "none"}, {y: 0, opacity: 1, display: "flex"});
    }
  }
}



// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

