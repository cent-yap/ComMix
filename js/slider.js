// Reference To Buttons
var btnLeft = document.getElementById('prev_btn');
var btnRight = document.getElementById('next_btn');

// Reference To Slider
var slider = document.querySelector('.con .slider'); // Fixed selector

btnRight.addEventListener('click', nextSlide);
function nextSlide(){
    slider.appendChild(slider.firstElementChild);
}

btnLeft.addEventListener('click', prevSlide);
function prevSlide(){
    slider.prepend(slider.lastElementChild);
}

// Auto Sliding
var deleteInterval; // Define deleteInterval globally
function autoSlide(){
    deleteInterval = setInterval(() => {
        nextSlide();
    }, 4000); // 4000 milliseconds = 4 sec
}
autoSlide();

// Stop Auto Sliding When Mouse is Over
slider.addEventListener('mouseover', deleteAutoSliding);
btnRight.addEventListener('mouseover', deleteAutoSliding);
btnLeft.addEventListener('mouseover', deleteAutoSliding);

function deleteAutoSliding(){
    clearInterval(deleteInterval);
}

// Resume Auto Sliding When Mouse is Out
slider.addEventListener('mouseout', autoSlide);
btnRight.addEventListener('mouseout', autoSlide);
btnLeft.addEventListener('mouseout', autoSlide);
