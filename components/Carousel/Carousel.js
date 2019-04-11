class Box{
    constructor(box){
        this.element = box;
        this.next = document.querySelector('.next');
        this.previous = document.querySelector('.prev');
        this.data = this.element.dataset.carousel;
        this.content = document.querySelector(`.box[data-carousel='${this.data}']`);
        // this.content = new BoxItem(this.itemContent);
        this.next.addEventListener('click', this.next())
        this.previous.addEventListener('click', this.previous())
    }
    //methods
    next(){
        console.log('clicked next')
    }
    previous(){
        console.log('clicked previous')
    }
}

carousel = document.querySelectorAll('.box').forEach(box => new Box(box))