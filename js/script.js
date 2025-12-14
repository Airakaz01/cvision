// Configuration de la présentation
const PRESENTATION_CONFIG = {
    totalSlides: 20, // Mis à jour pour correspondre au PDF (20 pages)
    transitionSpeed: 500,
    isFullscreen: false
};

// État de la présentation
let currentSlide = 0;
let slides = [];
let dots = [];

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initializePresentation();
    setupEventListeners();
    createSlideDots();
    updateSlideCounter();
    updateNavigationButtons();
});

// Initialiser la présentation
function initializePresentation() {
    slides = document.querySelectorAll('.slide');
    
    if (slides.length !== PRESENTATION_CONFIG.totalSlides) {
        console.warn(`Nombre de slides incorrect: ${slides.length} au lieu de ${PRESENTATION_CONFIG.totalSlides}`);
    }
    
    showSlide(0);
}

// Configurer les événements
function setupEventListeners() {
    document.getElementById('prevBtn').addEventListener('click', () => navigate(-1));
    document.getElementById('nextBtn').addEventListener('click', () => navigate(1));
    document.getElementById('presentBtn').addEventListener('click', toggleFullscreen);
    document.addEventListener('keydown', handleKeydown);
    
    // Clic pour naviguer
    document.querySelector('.slides-container').addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('.slide-dots')) return;
        if (e.clientX > window.innerWidth / 2) navigate(1);
        else navigate(-1);
    });
}

// Créer les points de navigation
function createSlideDots() {
    const dotsContainer = document.getElementById('slideDots');
    dotsContainer.innerHTML = ''; // Reset
    
    for (let i = 0; i < PRESENTATION_CONFIG.totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.dataset.slide = i;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
        dots.push(dot);
    }
    updateDots();
}

// Naviguer
function navigate(direction) {
    let newIndex = currentSlide + direction;
    if (newIndex < 0) newIndex = 0;
    else if (newIndex >= PRESENTATION_CONFIG.totalSlides) newIndex = PRESENTATION_CONFIG.totalSlides - 1;
    
    if (newIndex !== currentSlide) showSlide(newIndex);
}

function goToSlide(index) {
    if (index >= 0 && index < PRESENTATION_CONFIG.totalSlides) showSlide(index);
}

function showSlide(index) {
    if (slides[currentSlide]) slides[currentSlide].classList.remove('active');
    currentSlide = index;
    if (slides[currentSlide]) slides[currentSlide].classList.add('active');
    
    updateSlideCounter();
    updateNavigationButtons();
    updateDots();
}

function updateSlideCounter() {
    document.getElementById('currentSlide').textContent = currentSlide + 1;
    document.getElementById('totalSlides').textContent = PRESENTATION_CONFIG.totalSlides;
}

function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').disabled = currentSlide === PRESENTATION_CONFIG.totalSlides - 1;
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function handleKeydown(event) {
    switch (event.key) {
        case 'ArrowLeft': navigate(-1); break;
        case 'ArrowRight': navigate(1); break;
        case ' ': navigate(1); break;
        case 'f': toggleFullscreen(); break;
    }
}

function toggleFullscreen() {
    const container = document.body;
    if (!document.fullscreenElement) {
        container.requestFullscreen().catch(err => console.log(err));
        document.querySelector('.navigation').style.display = 'none';
    } else {
        document.exitFullscreen();
        document.querySelector('.navigation').style.display = 'flex';
    }
}

document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        document.querySelector('.navigation').style.display = 'flex';
    }
});