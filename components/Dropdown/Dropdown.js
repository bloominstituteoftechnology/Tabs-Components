class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector(".dropdown-button");
    this.content = this.element.querySelector(".dropdown-content");
    this.button.addEventListener('click', () => this.toggleContent());
  }

  toggleContent() {
    let display = this.content.style.display;
    if (display === "flex") {
      TweenMax.fromTo(this.content, 1, {y: 0, opacity: 1, display: "flex"}, {y: -150, opacity: 0, display: "none"});
    } else {
      TweenMax.fromTo(this.content, 1, {y: -150, opacity: 0, display: "none"}, {y: 0, opacity: 1, display: "flex"});
    }
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));
