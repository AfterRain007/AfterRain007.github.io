const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// JavaScript to detect scroll and apply the navbar-scrolled class
window.addEventListener('scroll', function () {
const navbar = document.querySelector('.navbar');
if (window.scrollY > 25) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});