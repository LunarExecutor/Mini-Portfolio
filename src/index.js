document.getElementById('menu-icon').addEventListener('click', function() {
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
