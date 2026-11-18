'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation-links');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

const viewer = document.querySelector('#photo-viewer');
const viewerImage = viewer.querySelector('img');
const viewerTitle = viewer.querySelector('h2');
document.querySelectorAll('[data-viewer]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    viewerTitle.textContent = link.dataset.viewer;
    viewerImage.src = link.href;
    viewerImage.alt = link.dataset.viewer;
    viewer.showModal();
  });
});
viewer.querySelector('button').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => {
  if (event.target === viewer) {
    const rect = viewer.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) viewer.close();
  }
});

const form = document.querySelector('#enquiry-form');
const result = document.querySelector('#enquiry-result');
const start = document.querySelector('#start-date');
const end = document.querySelector('#end-date');
const today = new Date();
const localDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
start.min = end.min = localDate;
function validateDates() {
  start.required = Boolean(end.value);
  end.min = start.value || localDate;
  end.setCustomValidity(start.value && end.value && end.value < start.value ? 'Choose an end date on or after the start date.' : '');
}
start.addEventListener('input', validateDates);
end.addEventListener('input', validateDates);
form.hidden = false;
form.addEventListener('input', () => {
  result.hidden = true;
  document.querySelector('#copy-status').textContent = '';
});
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('#service').value = link.dataset.service;
    result.hidden = true;
  });
});
function formatDate(value) {
  return value ? new Date(`${value}T12:00:00`).toLocaleDateString('en-GB', {day:'numeric', month:'long', year:'numeric'}) : '';
}
form.addEventListener('submit', event => {
  event.preventDefault();
  validateDates();
  if (!form.reportValidity()) return;
  const value = id => document.getElementById(id).value.trim();
  const dates = start.value ? `${formatDate(start.value)}${end.value ? ` to ${formatDate(end.value)}` : ''}` : 'Dates to be discussed';
  const message = [
    `Hello Anastasia, my name is ${value('your-name')}. I'd like to enquire about pet care.`,
    `Service: ${value('service')}`,
    `Pet(s): ${value('pets')}`,
    `Dates: ${dates}`,
    value('area') ? `Area / postcode: ${value('area')}` : '',
    value('details') ? `More details: ${value('details')}` : '',
    'Please could you confirm availability and the full price?'
  ].filter(Boolean).join('\n\n');
  document.querySelector('#message-preview').textContent = message;
  document.querySelector('#send-whatsapp').href = `https://wa.me/447486409386?text=${encodeURIComponent(message)}`;
  document.querySelector('#send-email').href = `mailto:daviesanastasia@hotmail.com?subject=${encodeURIComponent('Pet care enquiry — ' + value('service'))}&body=${encodeURIComponent(message)}`;
  result.hidden = false;
  result.focus({preventScroll:true});
  result.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'nearest'});
});
document.querySelector('#copy-message').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(document.querySelector('#message-preview').textContent);
    status.textContent = 'Message copied. Paste it into your preferred messaging app.';
  } catch {
    status.textContent = 'Automatic copying is unavailable. Select and copy the message above.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
