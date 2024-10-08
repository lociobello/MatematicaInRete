//-------- APPUNTI DROPDOWN - DESKTOP

// Get current page URL to determine active selection
document.addEventListener("DOMContentLoaded", function () {
  const indirizzoSelect = document.getElementById("indirizzoSelect");
  const currentPage = window.location.href.split("-");
  const currentIndirizzo = currentPage[1];
  const currentYear = currentPage[2].charAt(0);

  // Set the selected indirizzo and highlight the active year button
  indirizzoSelect.value = currentIndirizzo;
  const activeButton = document.getElementById("year" + currentYear);
  activeButton.classList.add("attivo");

  // Set the background color based on indirizzo
  if (currentIndirizzo === "S") {
    activeButton.classList.add("scientifico");
  } else if (currentIndirizzo === "U") {
    activeButton.classList.add("umanistico");
  }
});

// Update page when indirizzo (school type) is changed
function updatePage() {
  const indirizzo = document.getElementById("indirizzoSelect").value;
  const activeYear = document.querySelector(".years button.attivo").innerText;
  const newPage = "appunti-" + indirizzo + "-" + activeYear + ".html";
  window.location.href = newPage;
}

// Update page when a year is clicked
function navigateToPage(year) {
  const indirizzo = document.getElementById("indirizzoSelect").value;
  const newPage = "appunti-" + indirizzo + "-" + year + ".html";
  window.location.href = newPage;
}

//-------- APPUNTI DROPDOWN - MOBILE

// Function to check if navbar-container-mob is visible
function isNavbarVisible() {
  const navbarContainerMob = document.getElementById("navbar-container-mob");
  return navbarContainerMob && window.getComputedStyle(navbarContainerMob).display !== "none";
}

// Update page when indirizzo (school type) is changed
function updatePageMob() {
  if (isNavbarVisible()) {
    const indirizzo = document.getElementById("navSelect-2").value;
    const activeYear = document.querySelector(".years button.attivo").innerText;
    const newPage = "appunti-" + indirizzo + "-" + activeYear + ".html";
    window.location.href = newPage;
  }
}

// Update page when a year is clicked
function navigateToPageMob(year) {
  if (isNavbarVisible()) {
    const indirizzo = document.getElementById("navSelect-2").value;
    const newPage = "appunti-" + indirizzo + "-" + year + ".html";
    window.location.href = newPage;
  }
}

// Initial logic when the page loads
document.addEventListener("DOMContentLoaded", function () {
  if (isNavbarVisible()) {
    const indirizzoSelect = document.getElementById("navSelect-2");
    const currentPage = window.location.href.split("-");
    const currentIndirizzo = currentPage[1];
    const currentYear = currentPage[2].charAt(0);

    // Set the selected indirizzo and highlight the active year button
    indirizzoSelect.value = currentIndirizzo;
    const activeButton = document.getElementById("yearMob" + currentYear);
    if (activeButton) {
      activeButton.classList.add("attivo");

      // Set the background color based on indirizzo
      if (currentIndirizzo === "S") {
        activeButton.classList.add("scientifico");
      } else if (currentIndirizzo === "U") {
        activeButton.classList.add("umanistico");
      }
    }
  }
});

//---------MOBILE NAV

// Function to handle navigation
function navigate(select) {
  var value = select.value;
  switch (value) {
    case "home":
      window.location.href = "index.html";
      break;
    case "appunti":
      window.location.href = "appunti-lista.html";
      break;
    case "risorse":
      window.location.href = "risorse-lista.html";
      break;
    case "info":
      window.location.href = "info.html";
      break;
  }
}

// Function to set the select option based on the current page
function setSelectedOption() {
  var currentPage = window.location.pathname;
  var select = document.getElementById("navSelect");

  if (currentPage.includes("index.html")) {
    select.value = "home";
  } else if (currentPage.includes("appunti")) {
    select.value = "appunti";
  } else if (currentPage.includes("risorse-lista.html")) {
    select.value = "risorse";
  } else if (currentPage.includes("info.html")) {
    select.value = "info";
  }
}

// Call the function when the page loads
window.onload = setSelectedOption;
