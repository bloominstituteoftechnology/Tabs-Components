let nextBtn = document.querySelector('.next-btn');
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
    images[imgIndex].classList.add('hidden');
    if(imgIndex >= images.length-1){
        imgIndex = 0;
    }
    else{;
        imgIndex++;
    }
    images[imgIndex].classList.remove('hidden');
});

lastBtn.addEventListener('click',()=>{
    images[imgIndex].classList.add('hidden');
    if(imgIndex <= 0){
        imgIndex = images.length-1;
    }
    else{
        imgIndex--;
    }
    images[imgIndex].classList.remove('hidden');
});