
const plus = document.querySelectorAll('#plus');
const paragraph = document.querySelectorAll('.notText');
const accordion = document.querySelector('.accordion');
let i ;


for( i = 0 ; i < plus.length ; i++){
  plus[i].addEventListener('click', showText);
}

function showText(){
  let isOpen = false ;
  this.parentElement.nextElementSibling.classList.toggle('isText')
  if(this.isOpen == false){
    this.setAttribute('src' , './assets/images/icon-plus.svg'); 
    this.isOpen = true;
  }
  else{
    this.setAttribute('src' , './assets/images/icon-minus.svg');  
    this.isOpen = false;
  } 
  return console.log(isOpen);
}




