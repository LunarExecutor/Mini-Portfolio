// Function to toggle the mobile menu
function toggleMenu() {
    var nav = document.querySelector('.nav-bar ul');
    // Toggle the menu visibility
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
    nav.style.display = 'none'; // Ensure the mobile menu is hidden initially
});

// Add event listener to the hamburger icon for toggling the menu
document.getElementById('menu-icon').addEventListener('click', toggleMenu);

// Handle window resize event to adjust menu visibility
window.addEventListener('resize', function() {
    var nav = document.querySelector('.nav-bar ul');
    if (window.innerWidth > 768) {
        nav.style.display = 'flex'; // Show menu for desktop
    } else {
        nav.style.display = 'none'; // Hide menu for mobile
    }
});
