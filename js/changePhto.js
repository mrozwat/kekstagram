const editor = document.querySelector('.img-upload__overlay');
const downloadButton = document.querySelector('#upload-file');
const body = document.querySelector('body');
const closeEditor = document.querySelector('.img-upload__cancel');

console.log(downloadButton);


downloadButton.addEventListener('change',()=> {
  editor.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      editor.classList.add('hidden');
      body.classList.remove('modal-open');
    } });
  closeEditor.addEventListener('click', ()=> {
    editor.classList.add('hidden');
  });
} );
