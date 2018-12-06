class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent();
    })
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    if(this.content.classList.contains('dropdown-hidden')){ 
      TweenMax.fromTo(this.content, 1, {
        left: -350,
        display: 'none'
      }, {
        left: 0,
        display: 'flex'
      });

    } else {
      TweenMax.fromTo(this.content, 1, {
        left: 0,
        display: 'flex'
      }, {
        left: -350,
        display: 'none'
      });
    }
    this.content.classList.toggle('dropdown-hidden');

  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));