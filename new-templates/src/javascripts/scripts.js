/* eslint-disable */

import Splide from '@splidejs/splide';

import '../components/cmp-rating/cmp-rating';
import '../components/partials/toggle/toggle';

const alertMessage = document.getElementById('alert-message');

const saveBtns = document.querySelectorAll('.saveBtn');
const stepperNav = document.querySelector('.steppers-nav');

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    getSplide()
  }, 400);

  saveBtns.forEach((e) => {
    e.addEventListener('click', () => {
      alertMessage.classList.remove('d-none');
      stepperNav.classList.add('pb-4');
      setTimeout(() => {
        alertMessage.classList.add('d-none');
        stepperNav.classList.remove('pb-4');
      }, 3000);
    });
  });
});

function getSplide() {
  const carouselFour = document.querySelector('.carousel-4-card');
  if (!carouselFour) return;
  const carouselContenuti = new Splide(carouselFour, {
    pagination: false,
    arrows: false,
    gap: '2rem',
    perPage: 4,
    perMove: 1,
    speed: 800,
    breakpoints: {
      1200: { perPage: 3, pagination: true },
      992: { perPage: 2, gap: '1rem' },
      768: { perPage: 1, gap: 0 },
    },
  });
  carouselContenuti.mount();
}
