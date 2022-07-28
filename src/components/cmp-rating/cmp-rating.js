/* eslint-disable */
const wrapper = document.querySelector('.cmp-rating');
let activeStep = 0;

function initRatings() {
  if (!wrapper) return;
  const radios = wrapper.querySelectorAll('.rating input');
  const btnNext = wrapper.querySelector('.btn-next');
  const btnBack = wrapper.querySelector('.btn-back');

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      if(radio.checked) {
        if (activeStep == 0) {
          openNextStep();
        }
      }
    });
  });

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      closePreviousStep();
      openNextStep();
    });
  }

  if (btnBack) {
    btnBack.addEventListener('click', () => {
      closePreviousStep();
      backToPrevious();
    });
  }
}

function openNextStep() {
  const steps = wrapper.querySelectorAll('[data-step]');
  const formWrapper = wrapper.querySelector('.form-rating');
  const cardRating = wrapper.querySelector('.cmp-rating__card-first');
  const stepOneWrapper = wrapper.querySelector(`[data-step="${activeStep + 1}"]`);
  formWrapper.classList.remove('d-none');
  stepOneWrapper.classList.remove('d-none');
  stepOneWrapper.classList.add('active');
  activeStep = activeStep + 1;

  if (activeStep == steps.length) {
    formWrapper.classList.add('d-none');
    cardRating.classList.add('d-none');
    const event = new Event('feedback-submit');
    document.dispatchEvent(event);
  }
}

function backToPrevious() {
  const steps = wrapper.querySelectorAll('[data-step]');
  const formWrapper = wrapper.querySelector('.form-rating');
  const cardRating = wrapper.querySelector('.cmp-rating__card-first');
  const previousWrapper = wrapper.querySelector(`[data-step="${activeStep - 1}"]`);
  const currentWrapper = wrapper.querySelector(`[data-step="${activeStep}"]`);
  formWrapper.classList.remove('d-none');
  activeStep = activeStep - 1;
  if (activeStep == 0) {
    formWrapper.classList.add('d-none');
    cardRating.classList.remove('d-none');
  } else {
    previousWrapper.classList.remove('d-none');
    previousWrapper.classList.add('active');
    currentWrapper.classList.add('d-none');
    currentWrapper.classList.remove('active');
  }
}

function closePreviousStep() {
  const stepWrapper = wrapper.querySelector('[data-step].active');
  stepWrapper.classList.add('d-none');
  stepWrapper.classList.remove('active');
}

initRatings();
