class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent())
  }

  // Toggle the ".dropdown-hidden" class off and on
  toggleContent() {
    this.content.classList.toggle('dropdown-hidden');
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

// Greensock
const dropdownContent = document.querySelector('.dropdown-content');
console.log(dropdownContent.classList.contains('dropdown-hidden'));
document.querySelector('.dropdown-button').addEventListener('click', animateMenu);

const slideOut = TweenMax.from(".dropdown-content", 2, {y:-100, opacity:0})
function animateMenu() {
  if (dropdownContent.classList.contains('dropdown-hidden')) {
    // slideOut.reverse();
    // console.log("hidden")
    // TweenMax.from(".dropdown-content", 2, {y:-100, opacity:0}).reverse();
  } else {
    slideOut;
    console.log("not hidden")
  }
}