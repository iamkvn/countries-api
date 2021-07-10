'use strict';

// ELEMENTS
const log = console.log;
const filterBtn = document.querySelector('.js-filter__btn');
const filterList = document.querySelector('.js-filter__list');

//FUNCTIONS

const displayMenu = () => {
  filterList.classList.toggle('u-hidden');
};

filterBtn.addEventListener('click', displayMenu);
