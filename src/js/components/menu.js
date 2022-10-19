import gsap from 'gsap';
import { $ } from '../utilities';

export function animationCloseOpen() {
  let menu = $('menu');

  menu.addEventListener('click', backgroundAnimation);

  const tl = gsap.timeline();

  tl.set('#menu-background', {
    scale: 0.2,
  });

  tl.to('#menu-background', 0.4, {
    visibility: 'visible',
    rotation: 180,
    transformOrigin: '50% 50%',
    ease: 'back.out(1.3)',
    scale: 0.9,
  });

  tl.to('.path1', 0.4, {
    fill: 'red',
  });

  tl.reversed(true);

  function backgroundAnimation() {
    tl.reversed(!tl.reversed());
  }

  const tl2 = gsap.timeline();

  tl2.to('#menu', 100, {
    rotation: 999,
    transformOrigin: '50% 50%',
  });
}
