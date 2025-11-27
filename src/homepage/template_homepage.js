import './template_homepage.css';
import './assets/reset.css';
import './assets/font.css';
import './assets/common_general.css';

const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 50; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.width = `${Math.random() * 5 + 2}px`;
  particle.style.height = particle.style.width;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.animationDelay = `${Math.random() * 15}s`;
  particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
  particlesContainer.appendChild(particle);
}

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document
  .querySelectorAll(
    '.section-title, .section-subtitle, .requirement-card, .trust-content, .benefit-item, .footer-section',
  )
  .forEach((el) => {
    observer.observe(el);
  });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

console.log('I am running');
