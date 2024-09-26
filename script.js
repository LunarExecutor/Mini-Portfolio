// Function to toggle the mobile menu
function toggleMenu() {
    var nav = document.querySelector('.nav-bar ul');
    // Toggle the menu visibility for mobile
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

// Initially set the mobile menu display on page load
document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('.nav-bar ul');
    // Check screen width to set initial display
    if (window.innerWidth <= 768) {
        nav.style.display = 'none'; // Ensure the mobile menu is hidden initially
    } else {
        nav.style.display = 'flex'; // Show the menu for desktop
    }
});

// Add event listener to the hamburger icon for toggling the menu
document.getElementById('menu-icon').addEventListener('click', toggleMenu);

// Handle window resize event to adjust menu visibility
window.addEventListener('resize', function() {
    var nav = document.querySelector('.nav-bar ul');
    // Check screen width and adjust menu display accordingly
    if (window.innerWidth > 768) {
        nav.style.display = 'flex'; // Show menu for desktop
    } else {
        nav.style.display = 'none'; // Hide menu for mobile
    }
});
