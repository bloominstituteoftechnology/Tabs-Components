class Pictures {
	constructor(element){
		this.element = element;
		this.pictures = this.element.querySelectorAll('.picture');
		this.pictures = Array.from(this.pictures).map( picture => {
		  return new Picture(picture);
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
}

class Picture {
	constructor(picture){
		this.picture = picture;
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