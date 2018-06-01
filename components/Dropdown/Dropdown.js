class Dropdown {
  constructor(element) {
    // assign this.element to the dropdown element
    this.element = element;
    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.Button = this.element.querySelector('.dropdown-button');
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    this.isOpen = true;
    // Add a click handler to the button reference and call the toggleContent method.
    this.Button.addEventListener('click', () => {this.toggleContent()});
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.isOpen = !this.isOpen
  if(this.isOpen == false){
    //this.content.classList.add('dropdown-hidden');
    TweenMax.to(this.content, 1, {y:10 , opacity: 1, display:"flex"});
    console.log(this.isOpen);
  }

  else if(this.isOpen == true){
    TweenMax.to(this.content, 1, { y: 0, opacity: 0, display:"none"});
    //setTimeout(() => {this.content.classList.remove('dropdown-hidden')},50);
    console.log(this.isOpen);
  }

}
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));