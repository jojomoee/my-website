import gsap from 'gsap';
import { $ } from '../utilities';

export function animationCloseOpen() {
  let menu = $('menu');

  menu.addEventListener('click', backgroundAnimation);

  const tl = gsap.timeline();
  tl.from(
    '#menu-background',
    {
      visibility: 'hidden',
    },
    0
  );
  tl.reversed(true);

  function backgroundAnimation() {
    tl.reversed(!tl.reversed());
  }
}
