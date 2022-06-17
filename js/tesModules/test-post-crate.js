import * as test from './test-data.js';
import * as util from './util.js';
import { toBig } from '../big-picture.js';

const testData = test.creatTestPost(20,20);
const templatePost = document.querySelector('#picture').content;
const newPost = templatePost.querySelector('.picture');
const usersPostSection = document.querySelector('.pictures');

for (let i = 0; i<testData.length;i++){
  const post = newPost.cloneNode(true);
  const data = testData[i];

  const picture = post.querySelector('.picture__img');
  const likes = post.querySelector('.picture__likes');
  let coments = post.querySelector('.picture__comments');

  picture.src = testData[i].url;
  likes.textContent =testData[i].likes;
  coments = testData[i].comments.length;
  
  post.addEventListener('click', ()=> {
    toBig(data);
  });

  usersPostSection.appendChild(post);

}



