//menu hamburguer
function showMenu() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "assets/menu_white_36dp.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "assets/close_white_36dp.svg";
  }
}
//animação do slider
let count = 1;
document.getElementById('radio1').checked = true;
setInterval(function(){
  nextImage();
}, 4000);
function nextImage(){
  count++
  if(count>4){
    count = 1;
  }
  document.getElementById('radio' + count).checked = true;
}