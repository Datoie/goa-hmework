// variables
const header = document.querySelector('header');
const heroSection = document.querySelector('.hero-section');
const btn = document.querySelector('.cta-button');

btn.addEventListener('click',() => {
    header.style.display = 'flex';
    heroSection.style.display = 'none';
});