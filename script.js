const burger = document.querySelector('.burger');
const drawer = document.querySelector('.drawer');
const scrim  = document.querySelector('.scrim');

function toggle(open) {
  burger.classList.toggle('open', open);
  drawer.classList.toggle('open', open);
  scrim.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
}

burger.addEventListener('click', () => toggle(!drawer.classList.contains('open')));
scrim.addEventListener('click', () => toggle(false));
document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
