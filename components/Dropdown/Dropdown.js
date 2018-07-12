class Dropdown {
  constructor(element) {
    // assign this.element to the dropdown element
    this.element = element;
    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener("click",  () => { this.toggleContent() });

  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle("dropdown-hidden");
  }
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));





//// Sample Code from yesterday
// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence.
//   menu.classList.toggle("menu--open");
// }

// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector(".menu");

// // create a reference to the ".menu-button" class
// const menuButton = document.querySelector(".menu-button");


// // Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener("click", (event) => {
//   toggleMenu(event);
// })
