const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__menu');

burger.onclick = function () {
   menu.classList.toggle('menu-responsive') 
}