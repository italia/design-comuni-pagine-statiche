/* eslint-disable */
const formInputs = document.querySelectorAll('input[type="text"]');

function initCleanInput() {
  if (!formInputs.length) return;

  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.length > 0) {
        const cleanBtn = input.parentElement.querySelector('.clean-input');
        if (!cleanBtn) {
          input.insertAdjacentHTML('afterend', `
          <button type="button" class="clean-input" aria-label="Elimina testo di ricerca">
            <svg class="icon">
              <use xlink:href="../assets/bootstrap-italia/dist/svg/sprite.svg#it-close"></use>
            </svg>
          </button>
          `);
          const clean = input.parentElement.querySelector('.clean-input');
          const label = input.parentElement.querySelector('.cmp-input__label');
          clean.addEventListener('click', () => {
            input.value = '';
            clean.remove();
            label.classList.remove('active');
          });
        }
      } else {
        const cleanBtn = input.parentElement.querySelector('.clean-input');
        cleanBtn.remove();
      }
    });
  });
}

initCleanInput();