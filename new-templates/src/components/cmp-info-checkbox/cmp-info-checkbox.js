/* eslint-disable */

const cardsCheckbox = [...document.querySelectorAll(".cmp-info-checkbox")];
const inputsCheckbox = [...document.querySelectorAll(".check-input")];


function borderCardCheckbox () {
  inputsCheckbox.forEach((inputCheckbox, indexInput) => {
    inputCheckbox.addEventListener("change", () => {
      cardsCheckbox.forEach((cardCheckbox, indexCard) => {
        if(indexInput == indexCard)
        cardCheckbox.classList.toggle("has-border-green");

      })
    })
  })
}

borderCardCheckbox ();
