const carousel = document.querySelector('.carousel');
const navDots = document.querySelectorAll('.nav-dot');
let currentIndex = 0;
const totalCards = navDots.length;
const intervalTime = 15000; // 15 segundos

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    navDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextCard() {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
}

// Configura o intervalo para mudar o card automaticamente a cada 15 segundos
setInterval(nextCard, intervalTime);

// Permite a navegação manual através dos pontos
navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Inicializa o carrossel
updateCarousel();