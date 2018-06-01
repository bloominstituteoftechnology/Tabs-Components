class Dropdown {
  constructor(element) {
    // assign this.element to the dropdown element
    this.element = element

    // assign the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button')
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content')
    
    // Add a click handler to the button reference and call the toggleContent method.
    
    // Method 1 will need to use the e.target if we do this:
    // this.button.addEventListener('click', this.toggleContent)
    
    // Method 2: Use Anonymouse that takes care of the `this` context
    this.button.addEventListener('click', () => {this.toggleContent()})

    // Method 3: Bind the this
    // this.button.addEventListener('click', this.toggleContent.bind(this))
  }

  toggleContent(e) {
    
    // Using Method 1
    // console.log(e.target)
    // e.target.classList.toggle()

    // Method 2 and 3 from above, use this type of toggling
    // this.content.classList.toggle('dropdown-hidden')

    // Now with adding animation this is new
    if (this.content.classList.contains('dropdown-hidden')){
      TweenMax.to(this.content,.25,{right:0})
    } else TweenMax.to(this.content,.25,{right:155})

    this.content.classList.toggle('dropdown-hidden')
    
  }
}
// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');

//This is actually grabbing the entire dropdown
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));