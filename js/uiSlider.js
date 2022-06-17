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
    console.log(scaleValue.value);
  }

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

});

// Efects NoUiSlider

const effectSliderElement = document.querySelector('.effect-level__slider');
const efectValue = document.querySelector('.effect-level__value');               //Efect lavel
const efectButons = document.querySelector('.effects__list');
const radioButons= efectButons.querySelectorAll('.effects__radio');


noUiSlider.create(effectSliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
});

effectSliderElement.setAttribute('disabled', true);

function checkedButton () {
  let efectButonValue;
  for (let i=0;i<radioButons.length;i++){
    if( radioButons[i].checked) {
      efectButonValue=radioButons[i].value;
      switch (efectButonValue) {
        case 'none':  imgPreview.style.filter = 0;
          break;
        case  'chrome':
          imgPreview.style.filter = `grayscale(${efectValue.value})`;
          break;
        case  'sepia':
          imgPreview.style.filter = `sepia(${efectValue.value})`;
          break;
        case  'phobos':
          imgPreview.style.filter = `blur(${efectValue.value}px)`;
          break;
        case  'marvin':
          imgPreview.style.filter = `invert(${efectValue.value}%)`;
          break;
        case  'heat':
          imgPreview.style.filter = `brightness(${efectValue.value})`;
          break;
      }
    }

  }
}


effectSliderElement.noUiSlider.on('update',(...rest) => {
  efectValue.value = effectSliderElement.noUiSlider.get();
  checkedButton ();
} );

//нужно убрать слайдер

radioButons[0].addEventListener('change', ()=> {
  efectValue.value = 0;
  effectSliderElement.noUiSlider.set(0);
  imgPreview.style.filter = '';
  effectSliderElement.setAttribute('disabled', true);
});

radioButons[1].addEventListener('change', ()=> {
  efectValue.value = 0;
  effectSliderElement.noUiSlider.set(0);
  imgPreview.style.filter = '';
  effectSliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
  });
  effectSliderElement.noUiSlider.set(0);
  effectSliderElement.removeAttribute('disabled');
});


radioButons[2].addEventListener('change', ()=> {
  efectValue.value = 0;

  imgPreview.style.filter = '';
  effectSliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
  });
  effectSliderElement.noUiSlider.set(0);
  effectSliderElement.removeAttribute('disabled');
});

radioButons[3].addEventListener('change', ()=> {
  efectValue.value = 0;

  imgPreview.style.filter = '';
  effectSliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
  });
  effectSliderElement.noUiSlider.set(0);
  effectSliderElement.removeAttribute('disabled');
});

radioButons[4].addEventListener('change', ()=> {
  efectValue.value = 0;

  imgPreview.style.filter = '';
  effectSliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
  });
  effectSliderElement.noUiSlider.set(0);
  effectSliderElement.removeAttribute('disabled');
});

radioButons[5].addEventListener('change', ()=> {
  efectValue.value = 0;

  imgPreview.style.filter = '';
  effectSliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
  });
  effectSliderElement.noUiSlider.set(0);
  effectSliderElement.removeAttribute('disabled');
});


