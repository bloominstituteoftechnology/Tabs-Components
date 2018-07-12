const dropdown = document.querySelector(".dropdown")
const dropdownButton = document.querySelector(".dropdown-button")
const dropdownContent = document.querySelector(".dropdown-content")
class Dropdown {
  constructor(dropdown) {
    // assign this.element to the dropdown element
    this.element = dropdown;
    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = dropdownButton;
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = dropdownContent;
    // Add a click handler to the button reference and call the toggleContent method.
    dropdownButton.addEventListener("click", (e) => {
      this.content.classList.toggle("dropdown-hidden");
    })
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
      this.content.classList.toggle(".dropdown-hidden");   
  }
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));