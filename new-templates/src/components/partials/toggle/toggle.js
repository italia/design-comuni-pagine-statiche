/* eslint-disable */
const toggleInput=document.querySelector("#toggle-toggle");
const infoWrapper= document.querySelector(".infoWrapper");

function startToggle() {
  if(!toggleInput) return;
    toggleInput.addEventListener('change', () => {
    infoWrapper.classList.toggle("d-none");
  })
}

startToggle();
