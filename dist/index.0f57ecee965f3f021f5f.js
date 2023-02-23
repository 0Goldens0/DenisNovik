/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};



var burger = document.querySelector('.burger'),
  menu = document.querySelector('.header__nav'),
  navLink = document.querySelectorAll('.header__nav-link');
burger.addEventListener('click', function () {
  menu.classList.toggle('header__nav-active');
  burger.classList.toggle('burger-active');
});
navLink.forEach(function (link) {
  link.addEventListener('click', function () {
    navLink.forEach(function (otherLink) {
      if (otherLink !== link) {
        otherLink.classList.remove('active');
      }
    });
    link.classList.toggle('active');
  });
});
navLink.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var targetId = link.getAttribute('href');
    var targetElement = document.querySelector(targetId);
    if (targetElement) {
      var targetPosition = targetElement.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
/******/ })()
;