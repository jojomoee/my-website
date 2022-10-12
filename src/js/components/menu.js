import gsap from 'gsap';
import { $ } from '../utilities';

export function animationCloseOpen() {
  let menu = $('menu');

  menu.addEventListener('click', backgroundAnimation);

  const tl = gsap.timeline();

  tl.to('#menu-background', 0.4, {
    visibility: 'visible',
    rotation: 180,
	scale: 4,  
    ease: 'back.out(1.3)',
  });
  tl.reversed(true);

  function backgroundAnimation() {
    tl.reversed(!tl.reversed());
  }
}
