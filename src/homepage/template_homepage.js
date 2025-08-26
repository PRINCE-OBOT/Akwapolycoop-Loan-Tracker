import './template_homepage.css';
import './assets/reset.css';
import './assets/font.css';

const buttonContactUs = document.querySelector('.contact-us');
const backToTop = document.querySelector('.back-to-top');

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

backToTop.addEventListener('click', scrollToTop);

buttonContactUs.addEventListener('click', scrollToBottom);
