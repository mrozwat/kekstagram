const { has } = require("browser-sync");

const dowladForm = document.querySelector('.img-upload__text');
const hasTag = document.querySelector('.text__hashtags');
let re = /^#[A-Za-zА-Яа-яЁё0-9]{1,20}$/;

hasTag.setCustomValidity('ХэшТег должен начинаться с #')



const pristine = new Pristine(hasTags);
  
let aaa = pristine.addValidator(hasTag, function (value,el){
if (value.length >= 2 && value.length <= 20 && re.test(value);) {
  return true;
}
return false;
}, 'ошибка', 2,false);

// dowladForm.addEventListener('submit', function (e) {
//   e.preventDefault();
//   var valid = pristine.validate();
//   alert('Form is valid: ' + valid);

// });


//   function validateHas () {
//     return value.length >= 2 && value.length <= 20 && re.test(hasTags);
//     console.log('validation')
//   }

// pristine.addValidator(hasTags,validateHas(hasTags.textContent), 'хэшТег должен начинаться с #');
