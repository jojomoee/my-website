export function animationCloseOpen() {

  let menu = document.getElementById('menu');
  let state;

  menu.addEventListener('click', () => {
    menu.style.backgroundImage = 'url(./../../assets/close.svg)';
	state == true;
  });

}
