// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const exploreBtn = document.getElementById('exploreBtn');
const batikCards = document.querySelectorAll('.batik-card');
const modal = document.getElementById('batikModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalOrigin = document.getElementById('modalOrigin');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');

// Mobile Menu Toggle
mobileMenuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Explore Button - Scroll to Gallery
exploreBtn?.addEventListener('click', () => {
  document.getElementById('galeri').scrollIntoView({ behavior: 'smooth' });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      mobileMenu.classList.add('hidden'); // Close mobile menu
    }
  });
});

// Batik Card Click Events
batikCards.forEach(card => {
  card.addEventListener('click', () => {
    openModal(card);
  });

  const button = card.querySelector('button');
  if (button) {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(card);
    });
  }
});

// Open Modal Function
function openModal(card) {
  const name = card.dataset.name;
  const origin = card.dataset.origin;
  const description = card.dataset.description;
  const image = card.dataset.image;

  modalTitle.textContent = name;
  modalOrigin.textContent = origin;
  modalDescription.textContent = description;
  modalImage.src = image;
  modalImage.alt = name;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close Modal
closeModal?.addEventListener('click', closeModalFunction);
modal?.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModalFunction();
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModalFunction();
  }
});
function closeModalFunction() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Intersection Observer for Animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  const cards = document.querySelectorAll('.card-hover');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(card);
  });

  batikCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = `opacity 0.8s ease ${index * 0.1}s, transform 0.8s ease ${index * 0.1}s`;
    observer.observe(card);
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.classList.add('bg-white/98');
    nav.classList.remove('bg-white/95');
  } else {
    nav.classList.add('bg-white/95');
    nav.classList.remove('bg-white/98');
  }
});

// Ripple effect for buttons
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);
      setTimeout(() => { ripple.remove(); }, 600);
    });
  });
});

// Console welcome message
console.log(`
🎨 Selamat datang di Batik Nusantara!
🏛️ Warisan Budaya UNESCO Indonesia
✨ Website dibuat dengan cinta untuk melestarikan budaya Indonesia
`);

// Auto-changing Hero Background
const heroSection = document.getElementById('home');

// Array gambar background (ganti dengan path gambar Anda)
const backgrounds = [
  'img/ChatGPT Image Sep 29, 2025, 10_21_58 AM.png',
  'img/ChatGPT Image Sep 30, 2025, 08_35_03 AM.png', // ganti dengan nama file gambar Anda
  'img/WhatsApp Image 2025-09-30 at 08.57.22_1583dafe.jpg',
  'img/WhatsApp Image 2025-09-30 at 09.29.16_c1697d08.jpg'
];

let currentBgIndex = 0;

function changeBackground() {
  currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
  
  // Fade effect
  heroSection.style.transition = 'opacity 0.8s ease-in-out';
  heroSection.style.opacity = '0.6';
  
  setTimeout(() => {
    heroSection.style.backgroundImage = `url('${backgrounds[currentBgIndex]}')`;
    heroSection.style.opacity = '1';
  }, 800);
}

// Ganti background setiap 3 detik (3000ms)
setInterval(changeBackground, 3000);