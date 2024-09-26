// Function to toggle the mobile menu
function toggleMenu() {
    var nav = document.querySelector('.nav-bar ul');
    // Check if the menu is currently displayed
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block'; // Show the menu
    } else {
        nav.style.display = 'none'; // Hide the menu
    }
}

// Smooth scrolling when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initially hide the menu on page load (if necessary)
document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('.nav-bar ul');
    nav.style.display = 'none'; // Set the menu to hidden initially for mobile
});
