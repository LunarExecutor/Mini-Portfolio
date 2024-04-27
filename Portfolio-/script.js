// Select the dark mode switch
const darkModeToggle = document.querySelector('.switch input');

// Add event listener to toggle dark mode
darkModeToggle.addEventListener('change', () => {
    // Toggle dark mode class on the body
    document.body.classList.toggle('slider');
});
