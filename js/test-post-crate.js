import * as test from './test-data.js';
import * as util from './util.js';


const testData = test.creatTestPost(20,20);
const templatePost = document.querySelector('#picture').content;
const newPost = templatePost.querySelector('.picture');
const usersPostSection = document.querySelector('.pictures');

for (let i = 0; i<testData.length;i++){
  const post = newPost.cloneNode(true);


  const picture = post.querySelector('.picture__img');
  const likes = post.querySelector('.picture__likes');
  let coments = post.querySelector('.picture__comments');

  picture.src = testData[i].url;
  likes.textContent =testData[i].likes;
  coments = testData[i].comments.length;


  usersPostSection.appendChild(post);

}



