{let nextBtn = document.querySelector('.next-btn');
let lastBtn = document.querySelector('.last-btn');

// class WheelImg {
//     constructor(image){
//         this.image = image;
//     }
// }

let images = document.querySelectorAll('.picture-box img');
images = Array.from(images);//.map(image => new WheelImg(image));

let imgIndex = 0;
images[imgIndex].classList.remove('hidden');

nextBtn.addEventListener('click',()=>{
    let currentIndex = imgIndex;
    TweenMax.to(images[currentIndex],1,{left:-750,onComplete:()=>{
        images[currentIndex].classList.add('hidden');
        images[currentIndex].removeAttribute("style");
    }})
    // images[imgIndex].classList.add('hidden');
    if(imgIndex >= images.length-1){
        imgIndex = 0;
    }
    else{;
        imgIndex++;
    }
    TweenMax.from(images[imgIndex],1,{right:-750});
    images[imgIndex].classList.remove('hidden');
});

lastBtn.addEventListener('click',()=>{
    let currentIndex = imgIndex;
    TweenMax.to(images[currentIndex],1,{right:-750,onComplete:()=>{
        images[currentIndex].classList.add('hidden');
        images[currentIndex].removeAttribute("style");
    }})
    if(imgIndex <= 0){
        imgIndex = images.length-1;
    }
    else{
        imgIndex--;
    }
    TweenMax.from(images[imgIndex],1,{left:-750});
    images[imgIndex].classList.remove('hidden');
});}