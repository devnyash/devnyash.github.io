const themeToggle = document.getElementById('themeToggle');
const burger = document.getElementById('burger');
const overlay = document.getElementById('overlay');
const body = document.body;
const overlayLinks = document.querySelectorAll('.overlay-nav-link');

// Переключение темы
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Сохранение предпочтения темы в localStorage
    const isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('darkTheme', isDarkTheme);
});

// Открытие/закрытие оверлея через бургер-кнопку
burger.addEventListener('click', () => {
    const isActive = overlay.classList.contains('active');
    
    if (isActive) {
        // Закрытие оверлея
        overlay.classList.remove('active');
        burger.classList.remove('active');
    } else {
        // Открытие оверлея
        overlay.classList.add('active');
        burger.classList.add('active');
    }
});

// Закрытие оверлея при клике на ссылку
overlayLinks.forEach(link => {
    link.addEventListener('click', () => {
        overlay.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Закрытие оверлея при клике вне контента
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.classList.remove('active');
        burger.classList.remove('active');
    }
});

// Восстановление темы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
    if (isDarkTheme) {
        body.classList.add('dark-theme');
    }
});