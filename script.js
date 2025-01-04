// Function to toggle the mobile menu
function toggleMenu() {
    var nav = document.querySelector('.nav-bar ul');
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
});



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
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
});



// Smooth scrolling when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
>>>>>>> b7021a2 (all changes)
