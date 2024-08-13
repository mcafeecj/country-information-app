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
let isLoading = false;
function fetchCountries() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            toggleLoadingOverlay(true);
            const response = yield fetch('https://restcountries.com/v3.1/all'); // Get all Countries
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const countries = yield response.json();
            countries.sort((a, b) => {
                const nameA = a.name.common.toLowerCase();
                const nameB = b.name.common.toLowerCase();
                if (nameA < nameB)
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0;
            });
            displayCountries(countries);
        }
        catch (error) {
            console.error('Error fetching country data:', error);
        }
        finally {
            toggleLoadingOverlay(false);
        }
    });
}
function displayCountries(countries) {
    const countriesList = document.getElementById('countries-list');
    countriesList.innerHTML = '';
    countries.forEach(country => {
        const countryElement = document.createElement('li');
        countryElement.textContent = `${country.name.common} - Capital: ${country.capital ? country.capital[0] : 'N/A'}`;
        countriesList.appendChild(countryElement);
    });
}
function toggleLoadingOverlay(show) {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.style.display = show ? 'flex' : 'none';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const isCountriesPage = document.getElementById('countries-page') !== null; // Checks if we are on Countries Page
    if (isCountriesPage) {
        fetchCountries();
    }
});
