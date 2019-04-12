class Carousel {
    constructor(element){
      this.element = element;
      this.section = element.querySelector('.section');
      this.boxes = Array.from(this.element.querySelectorAll('.box'));
      this.boxes = this.boxes.map(box => new Box(box));
      this.showing = 0;
      this.left = this.element.querySelector('.left');
      this.right = this.element.querySelector('.right');
      this.left.addEventListener('click', () => this.handleLeft());
      this.right.addEventListener('click', () => this.handleRight());
    }
  
    handleLeft(){
        if(this.showing === 0){
            return
        };
        this.section.style.backgroundImage = 'url("https://picsum.photos/600/300/?random")';
        const wasShowing = this.showing;
        this.showing -= 1;
        
        this.boxes[wasShowing].deselect();
        this.boxes[this.showing].select();
        
        if(this.showing === 0) {
            this.left.disabled = true;
        }
        if(wasShowing === this.boxes.length - 1) {
            this.right.disabled = false;
        }
    }

    handleRight(){
        if(this.showing === this.boxes.length - 1){
            return
        };
        this.section.style.backgroundImage = 'url("https://picsum.photos/600/300/?space")';
        const wasShowing = this.showing;
        this.showing += 1;
        
        this.boxes[wasShowing].deselect();
        this.boxes[this.showing].select();

        if(this.showing === this.boxes.length - 1) {
            this.right.disabled = true;
            this.right.classList.add('noCursor');
        }
        if(wasShowing === 0) {
            this.left.disabled = false;
        }
    }
   
  }

class Box {
    constructor(element){
        this.element = element;
        this.title = element.querySelector('.box-title');
        this.description = element.querySelector('.box-description')
    }

    deselect(){
        this.element.classList.add('hidden');
    }

    select(){
        this.element.classList.remove('hidden');
        this.description.classList.add('fade-in');
        this.title.classList.add('slide-left');
    }
}



const carousel = document.querySelector('.carousel');
new Carousel(carousel);