class Dropdown{
  constructor(domElement){
    this.domElement = domElement;

    this.button = domElement.querySelector('.dropdown-button');
    this.button.addEventListener('click',()=>{this.showElements(event)})
    this.content = domElement.querySelector('.dropdown-content');

  }
  showElements(event){
    this.content.classList.toggle('dropdown-hidden');
  }
}

let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map((element) => {
  new Dropdown(element);    
})