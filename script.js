const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const lines = document.querySelector('.lines')
const flexcontainer = document.querySelector('.flex-container')

hamburger.addEventListener('click', ()=> {
  hamburger.classList.add('hide');
  menu.classList.remove('hide');
  lines.classList.toggle('visible');
  flexcontainer.classList.add('hide');
})

menu.addEventListener('click', ()=> {
  hamburger.classList.remove('hide');
  menu.classList.add('hide');
  lines.classList.toggle('visible');
  flexcontainer.classList.remove('hide');
})