// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Aplica efectos de aparición al hacer scroll
const sections = document.querySelectorAll('.section');

// Función para añadir o quitar la clase visible
const checkVisibility = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
};

// Usamos requestAnimationFrame para mejorar la eficiencia del scroll
let isScrolling = false;

window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            checkVisibility();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Llamada inicial para asegurar que las secciones visibles se muestren al cargar
checkVisibility();
