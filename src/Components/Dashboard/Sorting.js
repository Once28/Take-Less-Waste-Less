// Here are all the different ways of sorting the card view
// the alphabetical sort
export function sortAlphabetical() {
  let cardTitles, shouldSwitch;
  let switching = true;
  while (switching) {
    let i;
    switching = false;
    cardTitles = document.querySelectorAll(".card");

    for (i = 0; i < cardTitles.length - 1; i++) {
      shouldSwitch = false;
      let first = cardTitles[i].querySelector("h1");
      let second = cardTitles[i + 1].querySelector("h1");
      if (first.textContent.toLowerCase() > second.textContent.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      cardTitles[i].parentNode.insertBefore(cardTitles[i + 1], cardTitles[i]);
      switching = true;
    }
  }
}

// the reverse alphabetical sort
export function sortReverseAlphabetical() {
  let cardTitles, shouldSwitch;
  let switching = true;
  while (switching) {
    let i;
    switching = false;
    cardTitles = document.querySelectorAll(".card");

    for (i = 0; i < cardTitles.length - 1; i++) {
      shouldSwitch = false;
      let first = cardTitles[i].querySelector("h1");
      let second = cardTitles[i + 1].querySelector("h1");
      if (first.textContent.toLowerCase() < second.textContent.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      cardTitles[i].parentNode.insertBefore(cardTitles[i + 1], cardTitles[i]);
      switching = true;
    }
  }
}

// the greatest waste per capita sort
export function sortGreatest() {
  let cardTitles, shouldSwitch;
  let switching = true;
  while (switching) {
    let i;
    switching = false;
    cardTitles = document.querySelectorAll(".card");

    for (i = 0; i < cardTitles.length - 1; i++) {
      shouldSwitch = false;
      let first = cardTitles[i].querySelector("p:nth-of-type(3)");
      let second = cardTitles[i + 1].querySelector("p:nth-of-type(3)");
      if (
        parseFloat(first.textContent.substring(18)) <
        parseFloat(second.textContent.substring(18))
      ) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      cardTitles[i].parentNode.insertBefore(cardTitles[i + 1], cardTitles[i]);
      switching = true;
    }
  }
}

// the least waste per capita sort
export function sortLeast() {
  let cardTitles, shouldSwitch;
  let switching = true;
  while (switching) {
    let i;
    switching = false;
    cardTitles = document.querySelectorAll(".card");

    for (i = 0; i < cardTitles.length - 1; i++) {
      shouldSwitch = false;
      let first = cardTitles[i].querySelector("p:nth-of-type(3)");
      let second = cardTitles[i + 1].querySelector("p:nth-of-type(3)");
      if (
        parseFloat(first.textContent.substring(18)) >
        parseFloat(second.textContent.substring(18))
      ) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      cardTitles[i].parentNode.insertBefore(cardTitles[i + 1], cardTitles[i]);
      switching = true;
    }
  }
}

// Show/hide all schools

export function toggleCards() {
  let cardContainer = document.querySelector(".card-container");
  let sortRow = document.querySelector(".sort-row");
  if (cardContainer.style.display === "none") {
    cardContainer.style.display = "flex";
    sortRow.style.display = "flex";
  } else {
    cardContainer.style.display = "none";
    sortRow.style.display = "none";
  }
}
