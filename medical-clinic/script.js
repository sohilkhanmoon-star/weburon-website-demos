const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
  nav.classList.toggle('open', !open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
const dateInput = document.querySelector('input[name="date"]');
if (dateInput) dateInput.min = new Date().toISOString().slice(0, 10);
const form = document.getElementById('appointment-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form));
  const request = { id: Date.now(), name: data.name.trim(), phone: data.phone.trim(), email: data.email.trim(), service: data.service, date: data.date, time: data.time, status: 'New', created: new Date().toISOString() };
  try {
    const requests = JSON.parse(localStorage.getItem('willowbrook-demo-requests') || '[]');
    requests.unshift(request);
    localStorage.setItem('willowbrook-demo-requests', JSON.stringify(requests));
    form.reset();
    document.getElementById('form-message').textContent = 'Demo request saved in this browser. Open the owner dashboard to view it.';
  } catch {
    document.getElementById('form-message').textContent = 'This browser could not save the demo request. Please enable local storage and try again.';
  }
});
