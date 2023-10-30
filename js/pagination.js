import { showCards } from './showCards.js';

export function initializePagination(data, resultsPerPage) {
  let currentPage = 0;
  const prevPageButton = document.getElementById('prevPage');
  const nextPageButton = document.getElementById('nextPage');
  const currentPageDisplay = document.getElementById('currentPage');
  const totalPageCount = Math.ceil(data.length / resultsPerPage);

  updatePaginationButtons(currentPage, totalPageCount);

  prevPageButton.addEventListener('click', function () {
    if (currentPage > 0) {
      currentPage -= 1;
      updatePagination(currentPage);
    }
  });

  nextPageButton.addEventListener('click', function () {
    if (currentPage < totalPageCount - 1) {
      currentPage += 1;
      updatePagination(currentPage);
    }
  });

  function updatePagination(page) {
    currentPage = page;
    showCards(data, currentPage, resultsPerPage);
    updatePaginationButtons(currentPage, totalPageCount);
  }

  function updatePaginationButtons(page, pageCount) {
    prevPageButton.disabled = page === 0;
    nextPageButton.disabled = page === pageCount - 1;
    currentPageDisplay.textContent = `Page ${page + 1}`;
  }
}
