//header-burger, overlay
const themeToggle = document.getElementById('themeToggle');
const burger = document.getElementById('burger');
const overlay = document.getElementById('overlay');
const body = document.body;
const overlayLinks = document.querySelectorAll('.overlay-nav-link');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkTheme);
});

burger.addEventListener('click', () => {
    const isActive = overlay.classList.contains('active');
    
    if (isActive) {
        overlay.classList.remove('active');
        burger.classList.remove('active');
    } else {
        overlay.classList.add('active');
        burger.classList.add('active');
    }
});

overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
        overlay.classList.remove('active');
        burger.classList.remove('active');
    });
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
        burger.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    if (isDarkTheme) {
        body.classList.add('dark-theme');
    }
});

//swiper
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: '.swiper-pagination-custom',
        clickable: true,
    },

    navigation: {
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
    }
});