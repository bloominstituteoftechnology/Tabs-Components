class Carousel{
    constructor(containerID){
    this.container = document.getElementById(containerID) || document.body; 
    this.slides = this.container.querySelectorAll('.carousel');
    this.total = this.slides.length - 1; 
    this.current = 0; 
  
    
    this.slide(this.current); //This will start on slide 1. 
    }
    next (interval){
      (this.current === this.total) ? this.current = 0 : this.current += 1; 
  
      this.stop(); 
      this.slide(this.current); 
  
      if(typeof interval === 'number' && (interval % 1) === 0){
        let context = this; 
        this.run = setTimeout(function(){
          context.previous(interval);
        }, interval); 
      }
    }
    //previous 
    previous(interval){
      (this.current === this.total) ? this.current = 0 : this.current += 1; 
  
      this.stop(); 
      this.slide(this.current); 
  
      if(typeof interval === 'number' && (interval % 1) === 0){
        let context = this; 
        this.run = setTimeout(function(){
          context.previous(interval);
        }, interval); 
      }
    }
    stop() {
      clearTimeout(this.run); 
    }
  
    slide (index){
      if(index >= 0 && index <= this.total) {
        this.stop();
        for (let i = 0; i <= this.total; i++){
          if (i === index) {
            this.slides[i].style.display = "inline-block";
          } else {
            this.slides[i].style.display = 'none'; 
          }
        }
      } else {
        alert("Index " + index + " doesn't exist. Available : 0 - " + this.total); 
      }
  
    }
}
const carouselImages = new Carousel("images"); // Important time wasted not haivng ID
// in here it won't show up


// let buttons = document.querySelectorAll("button");

// let images = document.querySelectorAll("img"); 

// const nextButton = document.querySelector(".next");

// nextButton.addEventListener("click", carouselImages.next()); 

// const previousButton = document.querySelector(".previous");

// previousButton.addEventListener("click", carouselImages.previous()); 

// const stopButton = document.querySelector(".stop");

// stopButton.addEventListener("click", carouselImages.stop()); 


  