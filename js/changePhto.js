const editor = document.querySelector('.img-upload__overlay');
const downloadButton = document.querySelector('#upload-file');
const body = document.querySelector('body');
const closeEditor = document.querySelector('.img-upload__cancel');
const coment = document.querySelector('.text__description');
const hasTag = document.querySelector('.text__hashtags');


downloadButton.addEventListener('input',()=> {
  editor.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', (e) => {

    if (document.activeElement === coment || document.activeElement === hasTag)    {}
    else { if (e.key === 'Escape') {
      editor.classList.add('hidden');
      body.classList.remove('modal-open');
      document.querySelector('.img-upload__form').reset();
    }}
  });
  closeEditor.addEventListener('click', ()=> {
    editor.classList.add('hidden');
    document.querySelector('.img-upload__form').reset();

  });
} );


function resetEditor () {

  
}