class Dropdown {
  constructor(element) {

    // Assign this.element to the dropdown element
    this.element = element;

    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown .dropdown-button');

    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown .dropdown-content');

    //assign regerence to the links
    this.links = this.element.querySelectorAll('.dropdown-content a');

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => { this.toggleContent() })
  }

  animateArray() {
    this.links.forEach(link => TweenMax.fromTo(link, .55, {css: {height: 0, opacity: 0}}, {css:{height: 100, opacity: 1}} ));
  }

  reverseAnimateArray() {
    this.links.forEach(link => TweenMax.fromTo(link, .4, {css: {height: 100, opacity: 1}}, {css:{height: 0, opacity: 0}} ));
  }

  toggleContent() {

    // Toggle the ".dropdown-hidden" class off and on
    if(this.content.classList.contains('dropdown-hidden')) {
      TweenMax.fromTo(this.content, .4, {css: {height: 0, opacity: 0}}, {css:{height: 200, opacity: 1}} );
      this.animateArray();
      this.content.classList.toggle('dropdown-hidden');
    } else {
      this.reverseAnimateArray();
      TweenMax.fromTo(this.content, .4, {css: {height: 200, opacity: 1}}, {css:{height: 0, opacity: 0}} );
      this.content.classList.toggle('dropdown-hidden');
    }
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));
