/* eslint-disable */
document.addEventListener("DOMContentLoaded", function () {
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
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Questo campo è richiesto'
      },
    ])
    .addField('#surname', [
      {
        rule: 'required',
        errorMessage: 'Questo campo è richiesto'
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Questo campo è richiesto'
      },
      {
        rule: 'email',
        errorMessage: 'Email non valida',
      },
    ])
    .addField('#category', [
      {
        rule: 'required',
        errorMessage: 'Questo campo è richiesto'
      },
    ])
    .addField('#service', [
      {
        rule: 'required',
        errorMessage: 'Questo campo è richiesto'
      },
    ])
    .addField('#exampleFormControlTextarea-details', [
      {
        rule: 'required',
        errorMessage: 'Questo campo è richiesto'
      },
      {
        rule: 'maxLength',
        value: 600,
        errorMessage: 'Questo campo può contenere un massimo di 600 caratteri'
      },
    ])
    .addField('#privacy', [
      {
        rule: 'required',
        errorMessage: 'Questo campo è richiesto'
      },
    ])
    .onFail((fields) => {
      if (errorWrapper) {
        errorWrapper.innerHTML = '';
        errorWrapper.innerHTML = errorMessage;
      }
    })
})