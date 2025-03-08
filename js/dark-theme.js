let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
};

// Apply system theme on initial load if no user preference is saved
if (darkmode === null) {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
} else if (darkmode === 'active') {
  enableDarkMode();
}

// Toggle theme on button click
themeSwitch.addEventListener('click', () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== 'active' ? enableDarkMode() : disableDarkMode();
});