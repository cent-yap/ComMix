// Get references to elements
const termsContainer = document.querySelector('.terms-container');
const acceptButton = document.querySelector('.button.accept');
const rejectButton = document.querySelector('.button.reject');
const checkbox = document.querySelector('#check');
const modal = document.querySelector('.laying');

// Check user's decision from localStorage
const userDecision = localStorage.getItem('userDecision');

// If the user agreed, hide the modal with a fade-out effect
if (userDecision === 'agreed') {
  modal.style.opacity = '0'; // Start fading out
  setTimeout(() => {
    modal.style.display = 'none'; // Fully hide after fade-out
  }, 300); // Matches the duration of the fade-out effect
}

// Handle Accept button click
acceptButton.addEventListener('click', function () {
  if (!checkbox.checked) {
    // If checkbox is not checked, shake and show a message
    termsContainer.classList.add('shake');
    alert("You are not yet agreeing to our policy.");
    setTimeout(() => {
      termsContainer.classList.remove('shake');
    }, 300);
  } else {
    // If checkbox is checked, proceed, hide the modal, and save the decision
    modal.style.transition = 'opacity 300ms ease-in-out'; // Smooth fade-out
    modal.style.opacity = '0'; // Start fading out
    setTimeout(() => {
      modal.style.display = 'none'; // Fully hide after fade-out
      localStorage.setItem('userDecision', 'agreed');
    }, 300); // Matches the duration of the fade-out effect
  }
});

// Handle Reject button click
rejectButton.addEventListener('click', function () {
  // Shake and show a message, but do not save the "agreed" state
  termsContainer.classList.add('shake');
  alert("Is there any problem with our policy?");
  setTimeout(() => {
    termsContainer.classList.remove('shake');
  }, 300);
});

