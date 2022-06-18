import {resetvalue} from './uiSlider.js';
const button = document.querySelector('#upload-submit');
const form = document.querySelector('#upload-select-image');

function succesMessage () {
  const sucessMesage = document.querySelector('#succes');
  sucessMesage.classList.remove('hidden');
  const sucesButon =  document.querySelector('.success__button');

  sucesButon.addEventListener('click', () => {sucessMesage.classList.add('hidden');});

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      sucessMesage.classList.add('hidden');
    }
  });

  document.addEventListener('click', (e)=> {
    if (e.target.className != 'success__inner') {
      sucessMesage.classList.add('hidden');
    }
  });

  document.querySelector('body').classList.remove('modal-open');
}

function errorMessage () {
  const error = document.querySelector('.error_target');
  error.classList.remove('hidden');
  const erorButon =  document.querySelector('.error__button');

  erorButon.addEventListener('click', () => {error.classList.add('hidden');});

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      error.classList.add('hidden');
    }
  });

  document.addEventListener('click', (e)=> {
    if (e.target.className != 'error__inner') {
      error.classList.add('hidden');
    }
  });

  document.querySelector('body').classList.remove('modal-open');
}

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
        resetvalue ();
        succesMessage();

      } else {
        errorMessage ();
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
        unBlockButton ();

      }
    })
    .catch(() => {
      errorMessage ();
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
      unBlockButton ();


    });
};


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  blockButton();
  sendData(console.log,console.log,new FormData(form));

});


