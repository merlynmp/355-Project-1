// Merlyn Pothen

// Udemy code from Animated Navigation
const toggle = document.querySelector('#toggle');
const nav = document.querySelector('#nav');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

//Udemy code from Hidden Search Widget
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});