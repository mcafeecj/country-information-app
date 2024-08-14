let isLoading = false;
let countries: Country[] = [];

async function fetchCountries() {
    try {
        toggleLoadingOverlay(true);

        const response = await fetch('https://restcountries.com/v3.1/all'); // Get all Countries
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        countries = await response.json();
        countries.sort((a: Country, b: Country) => {
            const nameA = a.name.common.toLowerCase();
            const nameB = b.name.common.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });

        updateCountrySelect(countries);
    } catch (error) {
        console.error('Error fetching country data:', error);
    } finally {
        toggleLoadingOverlay(false);
    }
}

function updateCountrySelect(countries: Country[]) {
    const select = document.getElementById('country-select') as HTMLSelectElement | null;

    if (select) {

        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name.common;
            option.textContent = `${country.name.common}`;
            select.appendChild(option);
        });
    } else {
        console.error('The select element with ID "country-select" was not found.');
    }
}

function toggleLoadingOverlay(show: boolean) {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.style.display = show ? 'flex' : 'none';
    }
}

function displayCountryInformation(country: Country | null): void {
    const countryInfoDiv = document.getElementById('country-info-container');
    if (countryInfoDiv) {
        if (country === null) {
            countryInfoDiv.style.display = 'none';
            return;
        }

        countryInfoDiv.style.display = 'block';
        const flag = country.flags.svg || country.flags.png; // Use SVG or PNG flag if available

        countryInfoDiv.innerHTML =
        `   <div class="card" style="width: 18rem;">
                <img src="${flag}" class="card-img-top" alt="${country.name.common} flag">
                <div class="card-body">
                    <h3 class="card-title country-title">${country.name.common}</h3>
                    <p class="population"><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                    <p class="continent"><strong>Continent:</strong> ${country.continents ? country.continents[0] : 'N/A'}</p>
                    <p class="capital"><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
                </div>
            </div>
        `;
    }
}

document.getElementById('country-select')?.addEventListener('change', (event) => {
    const selectedCountryName = (event.target as HTMLSelectElement).value;
    if (selectedCountryName !== "") {
        console.log(selectedCountryName);
        const selectedCountry = countries.find(country => country.name.common === selectedCountryName);
        console.log('selectedCountry', selectedCountry);
        if (selectedCountry) {
            displayCountryInformation(selectedCountry); // Display country information below the dropdown
        }
    } else displayCountryInformation(null);
});

document.addEventListener('DOMContentLoaded', () => {
    const isCountriesPage = document.getElementById('countries-page') !== null;
    if (isCountriesPage) {
        fetchCountries();
    }
});
