
class Dropdown {
  constructor(element) {
    this.element 

    this.button
    this.content 

  }

  toggleContent() {

  }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));