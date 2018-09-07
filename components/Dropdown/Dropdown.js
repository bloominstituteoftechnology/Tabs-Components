class Dropdown {
  constructor(element) {

    // Assign this.element to the dropdown element
    this.element = element;

    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");

    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");
    this.content.zIndex = 1;
    this.content.style.display = "flex";
    this.dropDownVisible = false
    this.content.style.left = "-200px";
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', ()    =>  this.toggleContent())

  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    if(this.dropDownVisible === true)   {
        TweenLite.to(this.content, .5, {left: "-200px"})
        this.dropDownVisible = false;
    }   else {
        TweenLite.to(this.content, .5, {left: "0px"})
        this.dropDownVisible = true;
    }
    console.log(this.content.style)
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));
