/* eslint-disable */

import Splide from '@splidejs/splide';

import './pageStep';

import '../components/cmp-rating/cmp-rating';
import '../components/partials/toggle/toggle';
import '../components/cmp-info-button-card/cmp-info-button-card';
import '../components/cmp-info-checkbox/cmp-info-checkbox';
import '../components/partials/input/input';

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
    gap: '1rem',
    perPage: 4,
    perMove: 1,
    speed: 800,
    breakpoints: {
      1200: {
        perPage: 3,
        pagination: true
      },
      992: {
        perPage: 2,
        gap: '1rem'
      },
      768: {
        perPage: 1,
        gap: 0
      },
    },
  });
  carouselContenuti.mount();
}



function validateFormAssistenza() {
  const errorWrapper = document.querySelector('#errorMsgContainer');
  const formValidate = document.querySelector('#justValidateForm');
  if (!formValidate) return;
  const validate = new bootstrap.FormValidate('#justValidateForm', {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'form-feedback',
    errorLabelStyle: '',
    focusInvalidField: false,
  })
  validate
    .addField('.form-control', [{
      rule: 'required',
      errorMessage: 'Questo campo è richiesto'
    },])
    .addField('#surname', [{
      rule: 'required',
      errorMessage: 'Questo campo è richiesto'
    },])
    .addField('#email', [{
      rule: 'required',
      errorMessage: 'Questo campo è richiesto'
    },
    {
      rule: 'email',
      errorMessage: 'Email non valida',
    },
    ])
    .addField('#category', [{
      rule: 'required',
      errorMessage: 'Questo campo è richiesto'
    },])
    .addField('#service', [{
      rule: 'required',
      errorMessage: 'Questo campo è richiesto'
    },])
    .addField('#description', [{
      rule: 'required',
      errorMessage: 'Questo campo è richiesto'
    },
    {
      rule: 'maxLength',
      value: 600,
      errorMessage: 'Questo campo può contenere un massimo di 600 caratteri'
    },
    ])
    .addField('#privacy', [{
      rule: 'required',
      errorMessage: 'Questo campo è richiesto'
    },])
    .onFail((fields) => {
      if (errorWrapper) {
        errorWrapper.innerHTML = '';
        errorWrapper.innerHTML = errorMessage;
      }
    })
}

validateFormAssistenza();


function validateFormMulta() {
  const errorWrapper = document.querySelector('#errorMsgContainer');
  const formValidate = document.querySelector('#justValidateMulta');

  if (!formValidate) return;
  const validate = new bootstrap.FormValidate('#justValidateMulta', {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'form-feedback',
    errorLabelStyle: '',
    focusInvalidField: false,
  })
  validate
    .addField('#code', [{
      rule: 'required',
      errorMessage: 'Questo campo è richiesto'
    },])
    .addField('#date-1', [{
      rule: 'required',
      errorMessage: 'Questo campo è richiesto'
    },])
    .onFail((fields) => {
      if (errorWrapper) {
        errorWrapper.innerHTML = '';
        errorWrapper.innerHTML = errorMessage;
      }
    })
}

validateFormMulta();
