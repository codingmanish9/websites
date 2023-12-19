const toggleModeButton = document.getElementById('toggleMode');
const body = document.body;

// Check user's preference from localStorage
let isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Apply initial mode
if (isDarkMode) {
  enableDarkMode();
} else {
  disableDarkMode();
}

// Toggle mode when the button is clicked
toggleModeButton.addEventListener('click', () => {
  if (isDarkMode) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
  isDarkMode = true;
}

function disableDarkMode() {
  body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', null);
  isDarkMode = false;
}