const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const menuCloseButton = document.querySelector('.menu-close');

menuButton.addEventListener('click', () => {
  menu.classList.add('is-active'); /*появляется меню */
  menuCloseButton.classList.add('is-active'); /*появляется кнопка закрыть */
});
menuCloseButton.addEventListener('click', () => {
  menu.classList.remove('is-active'); /*удалили класс чтобы закрывалось */
  menuCloseButton.classList.remove('is-active'); 
});