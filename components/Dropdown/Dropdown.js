//dropdown 
class Dropdown {
  constructor(element) {
    //Properties for Dropdown class
    // assign this.element to the dropdown element
    this.element = element; //assigns element to dropdown class
    console.log(element);
    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = document.querySelector(".dropdown-button");
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = document.querySelector(".dropdown-content");
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent();
      console.log("button was clicked")});
    }//end of properties
    //Methods for Dropdown class
  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle("dropdown-hidden");
  } //end of methods
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));