/* eslint-disable */

import Splide from '@splidejs/splide';

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


/* Steps Page - Next and Back button */
const content = document.querySelector('.section-wrapper');
let currentStep = 1;
let navscroll = document.querySelector(`[data-index="${currentStep}"]`);
let progressBar = document.querySelector(`[data-progress="${currentStep}"]`);

function pageSteps() {
  if (!content) return;
  const btnSave = content.querySelectorAll('.saveBtn');
  const btnNext = content.querySelector('.btn-next-step');
  const btnBack = content.querySelector('.btn-back-step');
  navscroll.classList.add('d-lg-block');
  progressBar.classList.remove('d-none');

  btnSave.forEach(element => {
    element.classList.add('invisible');
  });

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      openNext();
    });
  }

  if (btnBack) {
    btnBack.addEventListener('click', () => {
      backPrevious();
    });
  }
}

function openNext() {
  const btnSave = content.querySelectorAll('.saveBtn');
  const steps = content.querySelectorAll('[data-steps]');
  const nextStep = content.querySelector(`[data-steps="${currentStep + 1}"]`);
  const stepWrapper = content.querySelector('[data-steps].active');
  navscroll.classList.remove('d-lg-block');
  progressBar.classList.remove('d-block');
  progressBar.classList.add('d-none');

  if (currentStep == steps.length) {
    return;
  } else {
    stepWrapper.classList.add('d-none');
    stepWrapper.classList.remove('active');
    nextStep.classList.add('active');
    nextStep.classList.remove('d-none');
    currentStep = currentStep + 1;
    progressBar = document.querySelector(`[data-progress="${currentStep}"]`);
    progressBar.classList.add('d-block');
    progressBar.classList.remove('d-none');

    if (currentStep < steps.length - 1) {
      navscroll = document.querySelector(`[data-index="${currentStep}"]`);
      navscroll.classList.add('d-lg-block');
    }

    if (currentStep == steps.length - 1) {
      content.classList.remove('offset-lg-1');
    }

    if (currentStep == steps.length) {
      content.querySelector('.steppers-btn-confirm span').innerHTML='Invia';
      btnSave.forEach(element => {
        element.classList.remove('invisible');
        element.classList.add('visible');
      });
    }
  }
}

function backPrevious() {
  const btnSave = content.querySelectorAll('.saveBtn');
  const steps = content.querySelectorAll('[data-steps]');
  const stepWrapper = content.querySelector('[data-steps].active');
  const previousStep = content.querySelector(`[data-steps="${currentStep - 1}"]`);

  if (currentStep == 1) {
    return;
  } else {
    previousStep.classList.remove('d-none');
    previousStep.classList.add('active');
    stepWrapper.classList.add('d-none');
    stepWrapper.classList.remove('active');
    navscroll.classList.remove('d-lg-block');
    progressBar.classList.add('d-none');

    currentStep = currentStep - 1;
    progressBar = document.querySelector(`[data-progress="${currentStep}"]`);
    progressBar.classList.toggle('d-none');
    content.querySelector('.steppers-btn-confirm span').innerHTML='Avanti';

    if (currentStep < steps.length-1) {
    navscroll = document.querySelector(`[data-index="${currentStep}"]`);
    navscroll.classList.add('d-lg-block');
      content.classList.add('offset-lg-1');

    }
    
    if (currentStep < steps.length) {
      btnSave.forEach(element => {
        element.classList.remove('visible');
        element.classList.add('invisible');
      });
    }
  }
}

pageSteps();

