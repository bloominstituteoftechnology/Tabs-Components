class Dropdown {
  constructor(element) {
    
    this.element = element;

    this.button = this.element.querySelector('.dropdown-button');
    
    this.content = this.element.querySelector('.dropdown-content');
    
    this.toggleContent = this.toggleContent.bind(this);
    
    this.button.addEventListener('click', this.toggleContent);
  
  }

  toggleContent() {
   
    this.content.classList.toggle('dropdown-hidden');
  
  }
}


let dropdowns = document.querySelectorAll('.dropdown');

dropdowns = Array.from(dropdowns).map(dropdown => new Dropdown(dropdown));
