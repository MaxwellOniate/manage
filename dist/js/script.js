const hamburgerBtn = document.querySelector('.menu-btn');
const hamburgerMenu = document.querySelector('.menu');

hamburgerBtn.addEventListener('click', function(){
  hamburgerBtn.classList.toggle('open');
  hamburgerMenu.classList.toggle('hidden');
});