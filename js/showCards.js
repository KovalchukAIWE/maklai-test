export function showCards(people, pageNumber, resultsPerPage) {
  const resultsList = document.getElementById('results');
  resultsList.innerHTML = '';

  const startIndex = pageNumber * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const peopleToDisplay = people.slice(startIndex, endIndex);

  peopleToDisplay.forEach(person => {
    const li = createPersonCard(person);
    resultsList.appendChild(li);
  });

  updatePaginationControls(pageNumber, people.length, resultsPerPage);
}

function createPersonCard(person) {
  const li = document.createElement('li');
  li.classList.add('card');
  li.innerHTML = `
    <div class="card__title">
        ${person.firstname} ${person.lastname}
    </div>
    <div class="card__item">
        <img class="card__icon" src="./images/mail.svg" alt="e-mail"/> ${
          person.email
        }
    </div>
    <div class="card__item">
        <img class="card__icon" src="./images/phone.svg" alt="phone"/> ${
          person.phone
        }
    </div>
    <div class="card__item">
        <img class="card__icon" src="./images/birthday.svg" alt="birthday"/> ${
          person.birthday
        }
    </div>
    <div class="card__item">
        <img class="card__icon" src="${
          person.gender === 'male' ? './images/male.svg' : './images/female.svg'
        }" alt="gender"/> ${person.gender}
    </div>
    <div class="card__item">
        <img class="card__icon" src="./images/website.svg" alt="website"/> ${
          person.website
        }
    </div>
  `;
  return li;
}

function updatePaginationControls(pageNumber, totalResults, resultsPerPage) {
  const prevPageButton = document.getElementById('prevPage');
  const nextPageButton = document.getElementById('nextPage');
  const currentPageDisplay = document.getElementById('currentPage');

  const totalPageCount = Math.ceil(totalResults / resultsPerPage);

  prevPageButton.disabled = pageNumber === 0;
  nextPageButton.disabled = pageNumber === totalPageCount - 1;
  currentPageDisplay.textContent = `Page ${pageNumber + 1}`;
}
