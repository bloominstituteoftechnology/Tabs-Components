class Dropdown {
  constructor(element) {

    this.element = element;
    this.button = this.element.querySelector('.dropdown-button');
    this.content = this.element.querySelector('.dropdown-hidden');
    // container is not defined, because it's outside of the dropdown div
    // container would need to be in a class, then linked to this class
    this.container = document.querySelector('.container');
    this.menuOpen = false;
    // console.log(container);

    this.button.addEventListener('click', () => {
      this.toggleContent();
    })

    this.container.addEventListener('click', () => {
      this.toggleContentClosed();
    })
  }

  toggleContent() {
    $(this.content).slideToggle('slide');
    this.content.style.display = "flex";
    if (this.menuOpen) {
      this.menuOpen = false;
    } else {
      this.menuOpen = true;
    }
  }
  toggleContentClosed() {
    if (this.menuOpen) {
      $(this.content).slideToggle('slide');
      this.menuOpen = false;
    }
  }
}


// will only work if new class is created and linked, see above


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown(dropdown));