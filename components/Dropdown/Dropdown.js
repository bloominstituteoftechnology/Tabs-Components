class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown .dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown .dropdown-content');
    
    //close menu
    TweenMax.to(this.content, 0, {y:-250, opacity:0});
    this.flag = true;

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => { 
      this.toggleContent();
    })
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    // this.content.classList.toggle('dropdown-hidden');
    if(this.flag) { // Open menu
      TweenMax.to(this.content, 2, {y:0, opacity:1});
      this.flag = false;
    } else { // Close menu
      this.flag = true;
      TweenMax.to(this.content, 2, {y:-250, opacity:0});
    }
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));