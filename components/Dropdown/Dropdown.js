class Dropdown {
  constructor(element) {
    // Assign this.element to the dropdown element
    this.element = element;
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(`.dropdown-button`);
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(`.dropdown-content`);

    //GSAP
    this.timeLine = new TimelineLite();
    this.timeLine
      .from('.dropdown-content', 1.5, { opacity: 0, ease: Sine.easeIn })
      .staggerFrom('.dropdown-link', 0.5, { opacity: 0, ease: Sine.easeIn });

    //Click handler
    this.button.addEventListener(
      'click',
      () => {
        // console.log(this.content.classList);
        if (this.content.classList.contains(`dropdown-hidden`)) {
          this.toggleContent();
          this.timeLine.play();
        } else {
          this.timeLine.reverse();
          this.toggleContent(); 
        }
      });
  }

  toggleContent() {
    this.content.classList.toggle(`dropdown-hidden`);
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));
