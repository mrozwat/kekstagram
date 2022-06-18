import {resetvalue} from './uiSlider.js'
const button = document.querySelector('#upload-submit');
const form = document.querySelector('#upload-select-image');



function blockButton () {
  button.disabled  = true;
}

function unBlockButton () {
  button.disabled  = false;
}
function hidenForm() {
  const formEdit = document.querySelector('.img-upload__overlay');
  formEdit.classList.add('hidden');
}

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        unBlockButton ();
        hidenForm();
         
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
        unBlockButton ();
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
      unBlockButton ();
    });
};


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  blockButton();
  sendData(console.log,console.log,new FormData(form));
  resetvalue ()
});


