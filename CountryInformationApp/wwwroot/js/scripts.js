"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
let isLoading = false;
let countries = [];
function fetchCountries() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            toggleLoadingOverlay(true);
            const response = yield fetch('https://restcountries.com/v3.1/all');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            countries = yield response.json();
            sortCountriesAsc(countries);
            updateCountrySelect(countries);
        }
        catch (error) {
            console.error('Error fetching country data:', error);
        }
        finally {
            toggleLoadingOverlay(false);
        }
    });
}
function sortCountriesAsc(countries) {
    return countries.sort((a, b) => {
        const nameA = a.name.common.toLowerCase();
        const nameB = b.name.common.toLowerCase();
        if (nameA < nameB)
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;
    });
}
function updateCountrySelect(countries) {
    const select = document.getElementById('country-select');
    if (select) {
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name.common;
            option.textContent = `${country.name.common}`;
            select.appendChild(option);
        });
    }
    else {
        console.error('Error updating the dropdown menu.');
    }
}
function toggleLoadingOverlay(show) {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.style.display = show ? 'flex' : 'none';
    }
}
function displayCountryInformation(country) {
    var _a, _b;
    const countryInfoDiv = document.getElementById('country-info-container');
    if (!countryInfoDiv)
        return;
    if (!country) {
        countryInfoDiv.style.display = 'none';
        return;
    }
    countryInfoDiv.style.display = 'flex';
    const { name, population, continents, capital, flags } = country;
    const flagImg = flags.svg || flags.png;
    const flagDescription = flags.alt || name.common;
    const countryCard = `
        <div class="card" style="width: 18rem;">
            <img src="${flagImg}" class="card-img-top" alt="${flagDescription} flag">
            <div class="card-body">
                <h3 class="card-title country-title">${name.common}</h3>
                <p class="population"><strong>Population:</strong> ${population.toLocaleString()}</p>
                <p class="continent"><strong>Continent:</strong> ${(_a = continents === null || continents === void 0 ? void 0 : continents[0]) !== null && _a !== void 0 ? _a : 'N/A'}</p>
                <p class="capital"><strong>Capital:</strong> ${(_b = capital === null || capital === void 0 ? void 0 : capital[0]) !== null && _b !== void 0 ? _b : 'N/A'}</p>
            </div>
        </div>
    `;
    countryInfoDiv.innerHTML = countryCard;
}
(_a = document.getElementById('country-select')) === null || _a === void 0 ? void 0 : _a.addEventListener('change', (event) => {
    const selectedCountryName = event.target.value;
    if (selectedCountryName !== "") {
        const selectedCountry = countries.find(country => country.name.common === selectedCountryName);
        if (selectedCountry) {
            displayCountryInformation(selectedCountry);
        }
    }
    else
        displayCountryInformation(null);
});
document.addEventListener('DOMContentLoaded', () => {
    const isCountriesPage = document.getElementById('countries-page') !== null;
    if (isCountriesPage) {
        fetchCountries();
    }
});
