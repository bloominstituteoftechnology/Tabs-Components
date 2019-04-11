class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = document.querySelector('.dropdown');
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent();
    });
  }

  toggleContent() {
    //Get Y offset of dropdown button, since the animation will start from where the button is.
    if(this.content.classList.contains('dropdown-hidden')) {
      this.content.classList.remove('dropdown-hidden');
      TweenMax.fromTo(this.content, 0.3, {
        y: -50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      });
    } else if (!this.content.classList.contains('dropdown-hidden')) {
      TweenMax.fromTo(this.content, 0.3, {
        y: 0,
        opacity: 1
      }, {
        y: -50,
        opacity: 0,
        onComplete: () => {
          this.content.classList.add('dropdown-hidden');
        }
      });
      
    }
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));