var tabs = document.querySelectorAll('.tabs');
var parrafos = document.querySelectorAll('.parrafos')

function toggleTab(elem){
  for(var i=0; i<elem.length; i++){
    elem[i].addEventListener('click',showContainers);
  }
}
function showContainers(){
  for(var j = 0; j < parrafos.length; j++){
    if(this.dataset.text === parrafos[j].dataset.text){
      parrafos[j].classList.remove('hidden');
    }
  } else{
    parrafos[j].classList.add('hidden');
    }
  }

window.onload = function(){
    toggleTab(tabs);
}