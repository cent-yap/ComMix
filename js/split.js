Splitting();

setTimeout(() => {
  document.querySelector(".card").focus();
},1500);

document.addEventListener('contextmenu', event => {
  event.preventDefault();
});

document.querySelectorAll('.disabled').forEach(element => {
  element.style.pointerEvents = 'none';
});

// Prevent F12
$(document).keydown(function (event) {
  if (event.keyCode == 123) { 
      return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
      return false;
  }
});

// Pop-up
document.getElementById('trigger').addEventListener('click', function() {
  var modal = document.getElementById('modal');
  if (modal.style.display === 'none' || modal.style.display === '') {
      modal.style.display = 'grid';
  } else {
      modal.style.display = 'none';
  }
});
