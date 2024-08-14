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
        sortCountriesAsc(countries);

        updateCountrySelect(countries);
    } catch (error) {
        console.error('Error fetching country data:', error);
    } finally {
        toggleLoadingOverlay(false);
    }
}

function sortCountriesAsc(countries: Country[]): Country[] {
    return countries.sort((a: Country, b: Country) => {
        const nameA = a.name.common.toLowerCase();
        const nameB = b.name.common.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
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
        console.error('Error updating the dropdown menu.');
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
    if (!countryInfoDiv) return;

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
                <p class="continent"><strong>Continent:</strong> ${continents?.[0] ?? 'N/A'}</p>
                <p class="capital"><strong>Capital:</strong> ${capital?.[0] ?? 'N/A'}</p>
            </div>
        </div>
    `;

    countryInfoDiv.innerHTML = countryCard;
}

document.getElementById('country-select')?.addEventListener('change', (event) => {
    const selectedCountryName = (event.target as HTMLSelectElement).value;
    if (selectedCountryName !== "") {
        const selectedCountry = countries.find(country => country.name.common === selectedCountryName);
        if (selectedCountry) {
            displayCountryInformation(selectedCountry);
        }
    } else
        displayCountryInformation(null);
});

document.addEventListener('DOMContentLoaded', () => {
    const isCountriesPage = document.getElementById('countries-page') !== null;
    if (isCountriesPage) {
        fetchCountries();
    }
});
