

import { toBig } from './big-picture.js';
import { createLoader } from './get-data.js';

const render=  createLoader(renderPost,rendorError);

const error =document.querySelector('#errorData');
const pictureContaner = document.querySelector('#addedPictures');
const folterBlock = document.querySelector('#img-filtersid');
const defaultButton = folterBlock.querySelector('#filter-default');
const randomButton = folterBlock.querySelector('#filter-random');
const manyComentsButton = folterBlock.querySelector('#filter-discussed');

const renderSortedAray =  createLoader(sortByComents,rendorError);
const renderRandom =  createLoader(randomPhoto,rendorError);

const randomDebonce = debounce(renderRandom,500);
const sortDebonce = debounce(renderSortedAray,500);
const defaltRenderDebonce = debounce(render,500);


function renderPost (data) {

  const templatePost = document.querySelector('#picture').content;
  const newPost = templatePost.querySelector('.picture');
  const usersPostSection = document.querySelector('.pictures');

  for (let i = 0; i<25;i++){
    const post = newPost.cloneNode(true);

    const realData = data[i];
    post.id = 'addPicture';
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

  const addedPhoto = document.querySelectorAll('#addPicture');

  showFilters(document.querySelectorAll('#addPicture'));

  function showFilters (addedPhoto) {
    folterBlock.classList.remove('hidden');
    defaultButton.addEventListener('click', () => {

      defaltRenderDebonce();
      addedPhoto.forEach((element)=> element.remove());

    });
    randomButton.addEventListener('click', () => {

      randomDebonce();
      addedPhoto.forEach((element)=> element.remove());

    });
    manyComentsButton.addEventListener('click', () => {
      sortDebonce();
      addedPhoto.forEach((element)=> element.remove());
    });
  }


}

function rendorError (err) {
  error.classList.remove('hidden');
  console.log(err);
}


function sortByComents (array) {

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


