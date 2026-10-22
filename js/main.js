const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');

// Shrink the header once the page has scrolled.
const onScroll = () => header.classList.toggle('is-stuck', window.scrollY >= 50);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu.
const setMenu = (open) => {
  menu.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
};
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });

document.getElementById('year').textContent = new Date().getFullYear();
