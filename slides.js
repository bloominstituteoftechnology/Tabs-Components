//moveSlides(1) = forward
//moveSlides(-1) = back

let slideNum = 1;
moveSlides(slideNum);

function moveSlides(n) {
  showSlides((slideNum += n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideNum = 1;
  }
  if (n < 1) {
    slideNum = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideNum - 1].style.display = "block";
}
