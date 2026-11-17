// 1. Put the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Dark mode button
var button = document.getElementById('theme-btn');

button.addEventListener('click', function () {
  // add the class "dark" if it's missing, remove it if it's there
  document.body.classList.toggle('dark');

  // change the button text to match
  if (document.body.classList.contains('dark')) {
    button.textContent = 'Light mode';
  } else {
    button.textContent = 'Dark mode';
  }
});
