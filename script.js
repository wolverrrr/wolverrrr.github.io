const nav = document.getElementById('siteNav');
const threshold = 64;
let ticking = false;

function updateNav() {
  if (window.scrollY > threshold) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateNav);
    ticking = true;
}
});


function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}


