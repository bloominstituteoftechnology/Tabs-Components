class Dropdown {
  constructor(element) {
    // assign this.element to the dropdown element
    this.element = element;
    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', this.toggleContent.bind(this));
    
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    // this.content.classList.toggle('dropdown-hidden');
    let content = this.content;
    if (!(Array.from(content.classList).includes('dropdown-hidden'))) {
      //to close
      TweenMax.to(content, .5, {height: 0, overflow: "hidden"});
      content.classList.add('dropdown-hidden');
    }
     else {
       //to open
       content.classList.remove('dropdown-hidden');
       TweenMax.set(content, {height: "auto", overflow: "auto"});
       TweenMax.from(content, .5, {height: 0, overflow: "hidden"});
     }
  }
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));