class Carousel {
    constructor(element){
      this.element = element;
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
        const wasShowing = this.showing;
        this.showing -= 1;
        console.log('showing', this.showing);
        console.log('wasShowing', wasShowing);
        this.boxes[wasShowing].deselect('left');
        this.boxes[this.showing].select('left');
        console.log(this.boxes.length);
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

        const wasShowing = this.showing;
        this.showing += 1;
        console.log('showing', this.showing);
        console.log('wasShowing', wasShowing);
        this.boxes[wasShowing].deselect('right');
        this.boxes[this.showing].select('right');

        if(this.showing === this.boxes.length - 1) {
            this.right.disabled = true;
        }
        if(wasShowing === 0) {
            this.left.disabled = false;
        }
    }
   
  }

class Box {
    constructor(element){
        this.element = element;
    }

    deselect(){
        this.element.classList.add('hidden');
    }

    select(){
        this.element.classList.remove('hidden');
    }
}



const carousel = document.querySelector('.carousel');
new Carousel(carousel);