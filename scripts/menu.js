// Элементы
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const scrollTopButton = document.getElementById('scrollTop');

// Создаем затемнение (overlay)
const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay);

// Функция открытия/закрытия
function toggleMenu() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    // Блокируем скролл страницы
    document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
}

// Слушатели событий
menuToggle.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

// Закрыть меню при клике на ссылку
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// Кнопка Наверх
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});