document
  .getElementById("birthdaySearchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    const apiUrl = `https://fakerapi.it/api/v1/persons?_locale=en_US&_seed=12345&_gender=&_birthday_from=${startDate}&_birthday_to=${endDate}&_quantity=10`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        displayResults(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

function displayResults(people) {
  const resultsList = document.getElementById("results");
  resultsList.innerHTML = "";

  if (people.length === 0) {
    resultsList.textContent = "No people found in the selected date range.";
  } else {
    people.forEach((person) => {
      const li = document.createElement("li");
      li.classList.add("card");
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
                      person.gender === "male"
                        ? "./images/male.svg"
                        : "./images/female.svg"
                    }" alt="gender"/> ${person.gender}
                </div>
                <div class="card__item">
                    <img class="card__icon" src="./images/website.svg" alt="website"/> ${
                      person.website
                    }
                </div>
            `;
      resultsList.appendChild(li);
    });
  }
}
