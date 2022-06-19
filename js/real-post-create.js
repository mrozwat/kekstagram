

import { toBig } from './big-picture.js';
import { createLoader } from './get-data.js';

const error =document.querySelector('#errorData');
const pictureContaner = document.querySelector('#addedPictures');
const folterBlock = document.querySelector('#img-filtersid');
const defaultButton = folterBlock.querySelector('#filter-default');
const randomButton = folterBlock.querySelector('#filter-random');
const manyComentsButton = folterBlock.querySelector('#filter-discussed');

const renderSortedAray =  createLoader(sortByComents,rendorError);
const renderRandom =  createLoader(randomPhoto,rendorError);

const randomDebonce = debounce(renderRandom,1000);
const sortDebonce = debounce(renderSortedAray,1000);
const defaltRenderDebonce = debounce(renderSortedAray,1000);

const render=  createLoader(renderPost,rendorError);

function renderPost (data) {
  const templatePost = document.querySelector('#picture').content;
  const newPost = templatePost.querySelector('.picture');
  const usersPostSection = document.querySelector('#addedPictures');

  for (let i = 0; i<25;i++){
    const post = newPost.cloneNode(true);

    const realData = data[i];

    const picture = post.querySelector('.picture__img');
    const likes = post.querySelector('.picture__likes');
    const coments = post.querySelector('.picture__comments');

    picture.src = realData.url;
    likes.textContent =realData.likes;
    coments.textContent = realData.comments.length;

    post.addEventListener('click', ()=> {
      toBig(realData);
    });

    usersPostSection.appendChild(post);
  }
  showFilters();
}

function rendorError (err) {
  error.classList.remove('hidden');
  console.log(err);
}

function showFilters () {
  folterBlock.classList.remove('hidden');
  defaultButton.addEventListener('click', () => {
    defaltRenderDebonce();

  });
  randomButton.addEventListener('click', () => {
    randomDebonce();
  });
  manyComentsButton.addEventListener('click', () => {
    sortDebonce();
  });
}


function sortByComents (array) {
  pictureContaner.innerHTML='';
  array.sort((a,b)  => {if (a.comments.length > b.comments.length) {
    return -1;
  }
  if (a.comments.length < b.comments.length) {
    return 1;
  }
  return 0;});
  const sortedArray = array;
  renderPost(sortedArray);
}

function randomPhoto (array) {
  pictureContaner.innerHTML='';
  for (let i = 0 ; (i < 10) && (i < array.length) ; i++) {
    const  r = Math.floor(Math.random() * (array.length - i)) + i;
    const photo = array[r];
    array[r] = array[i];
    array[i] = photo;
  }
  renderPost(array);
}

function debounce(f, ms) {

  let isCooldown = false;

  return function() {
    if (isCooldown) {return;}

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}

render();