// script.js

const input = document.querySelector('main input');

input.addEventListener('focus', () => {
    input.placeholder = "Type to discover something delicious...";
});

input.addEventListener('blur', () => {
    input.placeholder = "Search for restaurant, cuisine or a dish";
});

// Smooth fade-in on load for logo
window.addEventListener('load', () => {
    const logo = document.querySelector('main section:first-of-type img');
    logo.style.opacity = 0;
    logo.style.transition = 'opacity 2s ease';
    setTimeout(() => {
        logo.style.opacity = 1;
    }, 200);
});
