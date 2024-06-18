document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav');

    hamburger.addEventListener('click', function () {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    });
});