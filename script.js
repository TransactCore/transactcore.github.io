const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector('.status').textContent = 'This is a front-end demo. Connect a verified business contact channel to receive enquiries.';
});
