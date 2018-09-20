class Dropdown {
	constructor(dropdown) {
		/*-- DOM selectors -----------------------------*/
		this.dropdown = dropdown;
    this.button = this.dropdown.querySelector('.dropdown-button');
    this.content = this.dropdown.querySelector('.dropdown-content');
    /*-- event listeners ---------------------------*/
		this.button.addEventListener('click', () => this.toggleContent());
	}

  /*-- class functions ---------------------------*/
	toggleContent() {
		this.content.classList.toggle('dropdown-hidden');
  }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));
