  /* eslint-disable */
  var wrapper = document.querySelector('.cmp-rating');
  var activeStep = 0;

  function initRatings() {
    if (!wrapper) return;
    var radios = wrapper.querySelectorAll('.rating input');
    var btnNext = wrapper.querySelector('.btn-next');
    var btnBack = wrapper.querySelector('.btn-back');
    radios.forEach(function (radio) {
      radio.addEventListener('change', function () {
        /* changing the rating resets and restarts the flow */
        resetBlock()
        if (radio.checked) {
          openNextStep();
        }
      });
    });

    if (btnNext) {
      btnNext.addEventListener('click', function () {
        closePreviousStep();
        openNextStep();
      });
    }

    if (btnBack) {
      btnBack.addEventListener('click', function () {
        closePreviousStep();
        backToPrevious();
      });
    }
  }

  function openNextStep() {
    var formWrapper = wrapper.querySelector('.form-rating');
    formWrapper.classList.remove('d-none');

    var inputRadio = document.querySelector('[name="ratingA"]:checked');
    var currentFieldset = parseInt(inputRadio.value) > 3
      ? document.querySelector('.fieldset-rating-one')
      : document.querySelector('.fieldset-rating-two');
    currentFieldset.classList.remove('d-none')

    var currentStepWrapper = wrapper.querySelector("[data-step=\"".concat(activeStep + 1, "\"]"));
    currentStepWrapper.classList.remove('d-none');
    currentStepWrapper.classList.add('active');

    var steps = wrapper.querySelectorAll('[data-step]');
    activeStep = activeStep + 1;

    if (activeStep == steps.length) {
      var cardRating = wrapper.querySelector('.cmp-rating__card-first');
      formWrapper.classList.add('d-none');
      cardRating.classList.add('d-none');
      var event = new Event('feedback-submit');
      document.dispatchEvent(event);
    }
  }

  function backToPrevious() {
    // var steps = wrapper.querySelectorAll('[data-step]');
    var formWrapper = wrapper.querySelector('.form-rating');
    formWrapper.classList.remove('d-none');

    activeStep = activeStep - 1;

    if (activeStep == 0) {
      formWrapper.classList.add('d-none');

      var cardRating = wrapper.querySelector('.cmp-rating__card-first');
      cardRating.classList.remove('d-none');

      resetFieldsets();

      document.querySelector('[name="ratingA"]:checked').checked = false;
    } else {
      var previousWrapper = wrapper.querySelector("[data-step=\"".concat(activeStep + 1, "\"]"));
      previousWrapper.classList.add('d-none');
      previousWrapper.classList.remove('active');

      var currentWrapper = wrapper.querySelector("[data-step=\"".concat(activeStep, "\"]"));
      currentWrapper.classList.remove('d-none');
      currentWrapper.classList.add('active');
    }
  }

  function resetBlock() {
    closePreviousStep();

    var formWrapper = wrapper.querySelector('.form-rating');
    formWrapper.classList.add('d-none');

    resetFieldsets();

    activeStep = 0;
  }

  function resetFieldsets() {
    var fieldset1 = document.querySelector('.fieldset-rating-one')
    var fieldset2 = document.querySelector('.fieldset-rating-two')
    fieldset1.classList.add('d-none');
    fieldset2.classList.add('d-none');
  }

  function closePreviousStep() {
    var stepWrapper = wrapper.querySelector('[data-step].active');
    if (stepWrapper) {
      stepWrapper.classList.add('d-none');
      stepWrapper.classList.remove('active');
    }
  }

  initRatings();