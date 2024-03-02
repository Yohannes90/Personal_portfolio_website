/* toggle style switcher  */

const styleSwicherToggler = document.querySelector('.style-switcher-toggler');
styleSwicherToggler.addEventListener('click', () => {
  document.querySelector('.style-switcher').classList.toggle('open');
});

// hide style - switcher on scroll
window.addEventListener('scroll', () => {
  if (document.querySelector('.style-switcher').classList.contains('open')) {
    document.querySelector('.style-switcher').classList.remove('open');
  }
});

/* theme colors */

const alternateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle (color) {
  localStorage.setItem('color', color);
  changeColor();
}

function changeColor () {
  alternateStyle.forEach((style) => {
    if (localStorage.getItem('color') === style.getAttribute('title')) {
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled', 'true');
    }
  });
}

/* theme light and dark mode */

function changeHeroImage() {
  const img_hero = document.querySelector('.home .home-img img').src;
  if (img_hero.indexOf('hero_light.jpg') != -1) {
    document.querySelector('.home .home-img img').src = 'images/hero_dark.png';
  } else {
    document.querySelector('.home .home-img img').src = 'images/hero_light.jpg';
  }
}

const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
  dayNight.querySelector('i').classList.toggle('fa-sun');
  dayNight.querySelector('i').classList.toggle('fa-moon');
  changeHeroImage();
  document.body.classList.toggle('dark');
});
window.addEventListener('load', () => {
  if (document.classList.contains('dark')) {
    dayNight.querySelector('i').classList.add('fa-sun');
  } else {
    dayNight.querySelector('i').classList.add('fa-moon');
  }
});
