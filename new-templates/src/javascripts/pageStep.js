/* eslint-disable */

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

  if (currentStep !== steps.length) {
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

  if (currentStep !== 1) {
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