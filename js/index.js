import { fetchData } from './fethData.js';
import { showCards } from './showCards.js';
import { initializePagination } from './pagination.js';

const resultsPerPage = 6;
let data = [];

document
  .getElementById('birthdaySearchForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    data = await fetchData(startDate, endDate);

    showCards(data, 0, resultsPerPage);
    const paginationSection = document.querySelector('.pagination');
    paginationSection.style.display = 'flex';

    initializePagination(data, resultsPerPage);
  });
