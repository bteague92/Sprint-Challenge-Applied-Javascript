/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

let daCarousel = document.querySelector(".carousel-container");

function createCarousel() {
  const carousel = document.createElement("div");
  const lButton = document.createElement("div");
  const imgOne = document.createElement("img");
  const imgTwo = document.createElement("img");
  const imgThree = document.createElement("img");
  const imgFour = document.createElement("img");
  const rButton = document.createElement("div");

  ////classes
  carousel.classList.add("carousel");
  lButton.classList.add("left.button");
  rButton.classList.add("right-button");

  /////content
  lButton.textContent = "<";
  imgOne.src = "./assets/carousel/mountains.jpeg";
  imgTwo.src = "./assets/carousel/computer.jpeg";
  imgThree.src = "./assets/carousel/trees.jpeg";
  imgFour.src = "./assets/carousel/turntable.jpeg";
  rButton.textContent = ">";

  ////append

  carousel.appendChild(lButton);
  carousel.appendChild(imgOne);
  carousel.appendChild(imgTwo);
  carousel.appendChild(imgThree);
  carousel.appendChild(imgFour);
  carousel.appendChild(rButton);

  console.log(carousel);

  return carousel;
}

daCarousel.appendChild(createCarousel());

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
