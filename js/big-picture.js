
const bigPhoto = document.querySelector('.big-picture');
const bigPhotoimg = bigPhoto.querySelector('.big-picture__img');
const bigPhotoUrl = bigPhotoimg.querySelector('img');
const bigInfo =  bigPhoto.querySelector('.big-picture__social');
const likesCount = bigInfo.querySelector('.likes-count');
const comentCount = bigInfo.querySelector('.comments-count');
const photoDes = bigInfo.querySelector('.social__caption');
const comentTemplate =bigInfo.querySelector('#coment').content;
const newComent = comentTemplate.querySelector('.social__comment');
const comentList = document.querySelector('.social__comments');
const body = document.querySelector('body');

const cancelButton = document.querySelector('.big-picture__cancel');
cancelButton.addEventListener('click', ()=> {
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
});


function toBig (post) {

  bigPhoto.classList.remove('hidden');
  bigPhotoUrl.src = post.url;
  likesCount.textContent= post.likes;
  comentCount.textContent= post.comments.length;

  for (let i=0; i<post.comments.length;i++){
    const coment = newComent.cloneNode(true);
    const cAvatar = coment.querySelector('.social__picture');
    const cText = coment.querySelector('.social__text');
    cText.textContent = post.comments[i].message;
    cAvatar.src = post.comments[i].avatar;
    cAvatar.alt = post.comments[i].name;
    comentList.appendChild(coment);
  }
  photoDes.textContent = post.desription;
  body.classList.add('modal-open');

}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    bigPhoto.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});



export {toBig};
