class Pictures {
	constructor(element){
		this.element = element;
		this.pictures = this.element.querySelectorAll('.picture');
		this.pictures = Array.from(this.pictures).map( picture => {
		  return new Picture(picture, this);
		});
		this.state = 0;
		this.leftPointer = this.element.querySelector('.left-pointer');
		this.leftPointer.addEventListener('click', () => {
			if (this.state < 1){
				this.state += this.pictures.length-1;
			} else {
				this.state -= 1;
			}
			this.updateActive(this.pictures[this.state]);
		});
		this.rightPointer = this.element.querySelector('.right-pointer');
		this.rightPointer.addEventListener('click', () => {
			if (this.state >= this.pictures.length - 1){
				this.state = 0
			} else {
				this.state += 1;
			}
			this.updateActive(this.pictures[this.state]);
		});
		this.activePicture = this.pictures[this.state];
		this.init();
	}

	init() { 
	 	this.activePicture.makeVisible();
	}

	updateActive(newActive) {
	 	this.activePicture.makeHidden();
	 	this.activePicture = newActive;
	 	this.activePicture.makeVisible();
	}

	getTab(data) {
	 	return this.element.querySelector(`.picture[data-tab="${data}"]`);
	}
}

class Picture {
	constructor(picture, parent){
		this.picture = picture;
		this.carousel = parent;
		console.log(this.picture.classList);
	}

	makeVisible(){
		this.picture.classList.add('active-picture');
	}
	makeHidden(){
		this.picture.classList.remove('active-picture');
	}
}


let pics = document.querySelectorAll('.pictures');

pics = Array.from(pics).map(picture => new Pictures(picture));