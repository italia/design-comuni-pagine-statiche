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

const initT2S = () => {
  if ("speechSynthesis" in window || speechSynthesis) {
    const T2S = window.speechSynthesis || speechSynthesis;
    const message = new SpeechSynthesisUtterance();
    message.voiceURI = 'native';
    message.volume = 1;
    message.rate = 0.8;
    message.pitch = 1;
    message.lang = 'it-IT', 'Paulina';
    const resetLanguage = () => {
      var voices = [];
      voices = T2S.getVoices();
      message.voice = voices.find((voice) => voice.lang === 'it-IT', 'Paulina');
    }
    resetLanguage();
    if (T2S.onvoiceschanged !== undefined) {
      T2S.onvoiceschanged = resetLanguage;
    }
    return {T2S, message}
  }
}

var t2sPlay = false;
var srcElement;

const {T2S, message} = initT2S()

const play = (text) => {
  srcElement.children[1].innerText = "Stop"
  t2sPlay = true
  message.text = text;
  T2S.cancel();
  T2S.speak(message);
  window.onbeforeunload = () => {
    T2S.cancel();
  }
}

const stop = () => {
  srcElement.children[1].innerText = "Ascolta";
  t2sPlay = false;
  T2S.cancel();
}

message.addEventListener('end', () => { stop() })

const cleanHtml = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

window.listenElements = (sourceElement, elements) => {
  srcElement = sourceElement;
  if (t2sPlay === true) {
    stop();
    return;
  }
  var text = "";
  for (const element of document.querySelectorAll(elements)) {
    text = text + cleanHtml(element.innerHTML) + " "
  }
  play(text)
}

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


/* Header Hamburger Menu aria-expanded */

const nav = document.querySelector(".custom-navbar-toggler");
const closeBtn = document.querySelector('.close-menu');

function menuExpanded(){
  nav.addEventListener("click",function(){
    nav.setAttribute("aria-expanded","true");
  });

  closeBtn.addEventListener("click",function(){
    nav.setAttribute("aria-expanded","false");
  });
}

menuExpanded();