import gsap from 'gsap';
import {$} from '../utilities';

export function animationCloseOpen() {
  let menu = $('menu');
  console.log(menu);
  gsap.to('#menu.selected', {
    x: 200,
  });
}
