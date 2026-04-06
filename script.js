// ========================
// MOBILE MENU TOGGLE
// ========================
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// Hamburger icon click
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }

    adjustMenuOnLoad();
});

// Set correct menu state on load + resize
function adjustMenuOnLoad() {
    const navLinks = document.getElementById('nav-links');
    if (!navLinks) return;

    if (window.innerWidth > 768) {
        navLinks.classList.remove('active'); 
        navLinks.style.display = ''; 
    } else {
        navLinks.style.display = ''; 
    }
}

window.addEventListener('resize', adjustMenuOnLoad);

// ========================
// SMOOTH SCROLLING
// (only for same-page anchors)
// ========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId && targetId !== '#') {
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking
                const navLinks = document.getElementById('nav-links');
                if (navLinks && window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            }
        }
    });
});

// ========================
// PROJECT FILTERING (All / Web / IT)
// Only runs if projects page has filter buttons
// ========================
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.projects-container .project');
    const container = document.querySelector('.projects-container');

    if (filterButtons.length > 0 && projects.length > 0 && container) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active state from all buttons
                filterButtons.forEach(b => b.classList.remove('active-filter'));
                btn.classList.add('active-filter');

                const filter = btn.getAttribute('data-filter');

                // Show / hide projects
                projects.forEach(project => {
                    const category = project.getAttribute('data-category');

                    if (filter === 'all') {
                        project.style.display = 'flex';
                    } else if (category === filter) {
                        project.style.display = 'flex';
                    } else {
                        project.style.display = 'none';
                    }
                });

                // Reorder when "All" is clicked (IT first)
                if (filter === 'all') {
                    const itProjects = [];
                    const webProjects = [];

                    projects.forEach(project => {
                        if (project.getAttribute('data-category') === 'it') {
                            itProjects.push(project);
                        } else {
                            webProjects.push(project);
                        }
                    });

                    container.innerHTML = '';
                    [...itProjects, ...webProjects].forEach(project => {
                        container.appendChild(project);
                    });
                }
            });
        });
    }
});

// ========================
// FADE-IN ON SCROLL
// Only runs if elements exist
// ========================
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in-on-scroll');

    if (faders.length > 0) {
        const appearOptions = {
            threshold: 0.2,
            rootMargin: "0px 0px -50px 0px"
        };

        const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    }
});
