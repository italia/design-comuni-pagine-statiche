/* eslint-disable */

const cardsRadio = [...document.querySelectorAll(".radio-card")];
const inputsRadio = [...document.querySelectorAll(".radio-input")];


function borderCardRadio () {
  inputsRadio.forEach((inputRadio, indexInput) => {
    inputRadio.addEventListener("change", () => {
      cardsRadio.forEach((cardRadio, indexCard) => {
        if(indexInput == indexCard)
        cardRadio.classList.add("has-border-green");
        else
        cardRadio.classList.remove("has-border-green");
      })
    })
  })
}

borderCardRadio ();
