//header-burger, overlay
const themeToggle = document.getElementById('themeToggle');
const burger = document.getElementById('burger');
const overlay = document.getElementById('overlay');
const body = document.body;
const overlayLinks = document.querySelectorAll('.overlay-nav-link');
const map = document.getElementById('map');

let isDarkTheme = false;

themeToggle.addEventListener('click', function() {
    const url = new URL(map.src);
    
    if (!isDarkTheme) {
        url.searchParams.set('theme', 'dark');
        map.src = url.toString();
        isDarkTheme = true;
    } else {
        url.searchParams.delete('theme');
        map.src = url.toString();
        isDarkTheme = false;
    }
    
    body.classList.toggle('dark-theme');
    localStorage.setItem('darkTheme', body.classList.contains('dark-theme'));
});

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('darkTheme') === 'true';
    const body = document.body;
    const map = document.getElementById('map');
    
    if (savedTheme) {
        body.classList.add('dark-theme');
        
        const url = new URL(map.src);
        url.searchParams.set('theme', 'dark');
        map.src = url.toString();
        isDarkTheme = true;
    }
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

function updateMapTheme(isDark) {
    let url = new URL(mapIframe.src);
    
    if (isDark) {
        url.searchParams.set('theme', 'dark');
    } else {
        url.searchParams.delete('theme');
    }
    
    mapIframe.src = url.toString();
}

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

