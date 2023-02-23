import 'normalize.css';
import './main.scss';
import './fonts/fonts.scss';

let burger = document.querySelector('.burger'),
    menu = document.querySelector('.header__nav'),
    navLink = document.querySelectorAll('.header__nav-link');

burger.addEventListener('click', function() {
  menu.classList.toggle('header__nav-active');
  burger.classList.toggle('burger-active');
});

navLink.forEach(link => {
  link.addEventListener('click', function() {
    navLink.forEach(otherLink => {
      if (otherLink !== link) {
        otherLink.classList.remove('active');
      }
    });
    link.classList.toggle('active');
  })
});

navLink.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    let targetId = link.getAttribute('href');
    let targetElement = document.querySelector(targetId);
    if (targetElement) {
      let targetPosition = targetElement.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});