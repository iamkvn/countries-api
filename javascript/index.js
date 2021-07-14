'use strict';

// ELEMENTS
const log = console.log;
const filterBtn = document.querySelector('.js-filter__btn');
const filterList = document.querySelector('.js-filter__list');
const countriesContainer = document.querySelector('.js-countries-container');
const searchField = document.querySelector('.js-search__field');
let countries = [];

//FUNCTIONS
const displayMenu = () => {
  filterList.classList.toggle('u-hidden');
};

// const getCountryData = () => {
//   fetch(`https://restcountries.eu/rest/v2/all`)
//     .then((response) => response.json())
//     .then((data) => renderCountryData(data));
// };

const getCountry = async () => {
  try {
    const res = await fetch(`https://restcountries.eu/rest/v2/all`);
    countries = await res.json();
    renderCountry(countries);
  } catch (err) {
    log(err);
  }
};

const renderCountry = (countries) => {
  const htmlStr = countries
    .map((country) => {
      return `
    <div class="card">
        <img class="card__img" src="${country.flag}" alt="flag" />
        <div class="card__body">
          <h3 class="card__title heading-3">${country.name}</h3>
          <div class="card__details">
            <p class="card__text paragraph"><span>Population:</span>${country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
            <p class="card__text paragraph"><span>Region:</span>${
              country.region
            }</p>
            <p class="card__text paragraph"><span>Capital:</span>${
              country.capital
            }</p>
          </div>
        </div>
      </div>
    `;
    })
    .join('');
  countriesContainer.innerHTML = htmlStr;
};

const search = (e) => {
  const searchStr = e.target.value.toLowerCase();
  const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().startsWith(searchStr);
  });
  log(filteredCountries);
  renderCountry(filteredCountries);
};

getCountry();

//EVENTS
searchField.addEventListener('keyup', search);
filterBtn.addEventListener('click', displayMenu);
