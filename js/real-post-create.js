

import { toBig } from './big-picture.js';
import { createLoader } from './get-data.js';

const error =document.querySelector('#errorData');

function renderPost (data) {
  const templatePost = document.querySelector('#picture').content;
  const newPost = templatePost.querySelector('.picture');
  const usersPostSection = document.querySelector('.pictures');

  for (let i = 0; i<25;i++){
    const post = newPost.cloneNode(true);

    const realData = data[i];

    const picture = post.querySelector('.picture__img');
    const likes = post.querySelector('.picture__likes');
    let coments = post.querySelector('.picture__comments');

    picture.src = realData.url;
    likes.textContent =realData.likes;
    coments = realData.comments.length;

    post.addEventListener('click', ()=> {
      toBig(realData);
    });

    usersPostSection.appendChild(post);

  }
}


function rendorError (err) {
  error.classList.remove('hidden');
  console.log(err);
}


const render=  createLoader(renderPost,rendorError);
render();
