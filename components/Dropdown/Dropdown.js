class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent())
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');
  }
}

// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown');
dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));

class ImageItem {
  constructor(element){
    this.element = element;
    this.leftBumper = document.createElement('div');
    this.rightBumper = document.createElement('div');

    this.leftBumper.innerHTML = `<h4>◁</h4>`;
    this.leftBumper.classList.toggle('bumper-arrow');

    this.rightBumper.innerHTML = `<h4>▷</h4>`;
    this.rightBumper.classList.toggle('bumper-arrow');

    this.element.prepend(this.leftBumper);
    this.element.appendChild(this.rightBumper);
    
    this.data = this.element.dataset.pic;

    // this.itemElement = document.querySelector(
    //   `.tabs-item[data-tab='${this.data}']`
    // );
    this.leftBumper.addEventListener('click', () => this.goLastPic())
    this.rightBumper.addEventListener('click', () => this.goNextPic())

  }
  goLastPic(){
    this.element.classList.toggle('images-current');
    if (this.data - 1 === 0){
      this.lastPicData = 4 
    }
    else{
      this.lastPicData = this.data - 1
    }
    this.lastPic = document.querySelector( `[data-pic= '${this.lastPicData}']`)
    this.lastPic.classList.toggle('images-current')
  }
  goNextPic(){
    this.element.classList.toggle('images-current');
    if (Number(this.data) + 1 === 5){
      this.nextPicData = 1;
    }
    else{
      this.nextPicData = Number(this.data) + 1;
    }
    console.log(this.nextPicData)
    this.nextPic = document.querySelector( `[data-pic= '${this.nextPicData}']`);
    this.nextPic.classList.toggle('images-current');
  }
}

let images = document.querySelectorAll('.images')

images = Array.from(images).map(x => new ImageItem(x))
