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
