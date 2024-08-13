let isLoading = false;

async function fetchCountries() {
    try {
        toggleLoadingOverlay(true);

        const response = await fetch('https://restcountries.com/v3.1/all'); // Get all Countries
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const countries = await response.json();
        countries.sort((a: any, b: any) => {
            const nameA = a.name.common.toLowerCase();
            const nameB = b.name.common.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });

        displayCountries(countries);
    } catch (error) {
        console.error('Error fetching country data:', error);
    } finally {
        toggleLoadingOverlay(false);
    }
}

function displayCountries(countries: any[]) {
    const countriesList = document.getElementById('countries-list');
    countriesList!.innerHTML = '';

    countries.forEach(country => {
        const countryElement = document.createElement('li');
        countryElement.textContent = `${country.name.common} - Capital: ${country.capital ? country.capital[0] : 'N/A'}`;
        countriesList!.appendChild(countryElement);
    });
}

function toggleLoadingOverlay(show: boolean) {
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
