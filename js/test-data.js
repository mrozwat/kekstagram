
class testPpost {
  constructor (id, url,desription,likes,comments){
    this.desription = 'Я очень интересное описание ';
    this.likes = getRandomPositiveInteger(1,25);
    this.comments =[];
  }
}

class testComent {

}


function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}



function testMessage (){
  let massagestr ='';
  const rand = getRandomPositiveInteger(1,6);
  switch (rand) {
    case 1:massagestr= 'Всё отлично!';
      break;
    case 2:massagestr= 'В целом всё неплохо. Но не всё.';
      break;
    case 3:massagestr= 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.';
      break;
    case 4:massagestr= 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.';
      break;
    case 5:massagestr= 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.';
      break;
    case 6:massagestr= 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';
      break;
  }
  return massagestr;
}

function testname (){
  let namestr ='';
  const rand = getRandomPositiveInteger(1,6);
  switch (rand) {
    case 1:namestr= 'Петя';
      break;
    case 2:namestr= 'Не Петя';
      break;
    case 3:namestr= 'Ваня';
      break;
    case 4:namestr= 'Максим';
      break;
    case 5:namestr= 'Олег';
      break;
    case 6:namestr= 'Миша';
      break;
  }
  return namestr;
}

function createComents (max) {
  const testComArray = [];

  for (let i =1;i<max;i++){
    const testcom = new testComent();
    testcom.id = comentId;
    testcom.avatar= `img/avatar${getRandomPositiveInteger(1,6)}.svg`;
    testcom.message = testMessage ();
    testcom.name =  testname();
    testComArray.push(testcom);
  }

  return testComArray;
}

function creatTestPost (maxP, maxC) {
  const testPostMasiv =[];
  for (let i =1;i<=maxP;i++){

    const test = new testPpost();
    test.id =postId();
    test.url = `photos/${i}.jpg`;
    test.comments= createComents(maxC);
    testPostMasiv.push(test);
  }
  return testPostMasiv;
}

function simpleIdgenerator (){
  let lastId=0
  return function (){
    last+=1
    return lastId;
  };
}

function getRandomIdFromRange (min,max){
  const idAray = [];
  return function () {
    let curentValue = getRandomPositiveInteger(min,max);
    if (idAray >=(max-min+1)) {console.log('Увеличь рендж'); return null;}
    while (idAray.includes(curentValue)) {
      curentValue = getRandomPositiveInteger (min,max);
    }
    idAray.push(curentValue);
    return curentValue;
  };
}

const postId = getRandomIdFromRange(1,100);
const comentId = simpleIdgenerator();


export {creatTestPost,createComents,testname,testMessage,getRandomPositiveInteger,getRandomIdFromRange,simpleIdgenerator};
