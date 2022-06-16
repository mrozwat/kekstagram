// Scale Butons +-
const  scaleToBig = document.querySelector('.scale__control--smaller');
const  scaleToSmal = document.querySelector('.scale__control--bigger');
const  scaleValue = document.querySelector('.scale__control--value');
const  imgPreview = document.querySelector('.img-upload__preview'); 



scaleToBig.addEventListener('click', ()=> {
  const valueMinusLast= scaleValue.value.slice(0,-1);
  let value =Number(valueMinusLast);
  if(value>25 ){
  value-=25;
  imgPreview.style.transform = `scale(${value / 100})`;
  value+= '%';
  scaleValue.value=value;
  console.log(scaleValue.value)
  }
  else {console.log('minscale')}
});


scaleToSmal.addEventListener('click', ()=> {
  const valueMinusLast= scaleValue.value.slice(0,-1);
  let value =Number(valueMinusLast);
  if( value<100){
  value+=25;
  imgPreview.style.transform = `scale(${value / 100})`;
  value+= '%';
  scaleValue.value=value;
}
else {console.log('maxscale')}
});


// scaleValue.value.addEventListener('input', function(){
// // let transfomValue = Number(scaleValue.value.slice(0,-1))
// console.log("change")
// });