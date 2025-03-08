  // Access the Images
  let slideImages = document.querySelectorAll('.slides img');
  // Access the next and prev buttons
  let next = document.querySelector('.next');
  let prev = document.querySelector('.prev');
  // Access the indicators
  let dots = document.querySelectorAll('.dot');

  var counter = 0;
  var slideInterval;

  // Code for next button
  next.addEventListener('click', slideNext);
  function slideNext() {
      slideImages[counter].classList.remove('active');
      if (counter >= slideImages.length - 1) {
          counter = 0;
      } else {
          counter++;
      }
      slideImages[counter].classList.add('active');
      indicators();
  }

  // Code for prev button
  prev.addEventListener('click', slidePrev);
  function slidePrev() {
      slideImages[counter].classList.remove('active');
      if (counter == 0) {
          counter = slideImages.length - 1;
      } else {
          counter--;
      }
      slideImages[counter].classList.add('active');
      indicators();
  }

 // Auto slideing
 function autoSliding(){
    deletInterval = setInterval(timer, 5000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();

// Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container.addEventListener('mouseout', autoSliding);

  // Add and remove active class from the indicators
  function indicators() {
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(' active', '');
      }
      dots[counter].className += ' active';
  }

  // Add click event to the indicator
  function switchImage(currentImage) {
      let imageId = parseInt(currentImage.getAttribute('attr'));
      if (imageId !== counter) {
          slideImages[counter].classList.remove('active');
          counter = imageId;
          slideImages[counter].classList.add('active');
          indicators();
      }
  }