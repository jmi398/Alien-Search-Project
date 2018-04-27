// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $datetime_Input = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filtered_dataSet to dataSet initially
var filtered_dataSet = dataSet;

// renderTable renders the filtered_dataSet to the tbody
function renderTable() {
  $tbody.innerHTML = "";
 for (var i = 0; i < filtered_dataSet.length; i++) {
    // Get the current dataSet object and its fields
    var data = filtered_dataSet[i];
    var fields = Object.keys(data);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the data object, create a new cell and set its inner text to be the current value at the current data's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
}

function handleSearchButtonClick(event) {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDatetime = $datetime_Input.value.trim();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();

  // Set filtered_dataSet to an array of all date whose "datetime", "city", etc matches the filter
  filtered_dataSet = dataSet.filter(function(data) {
    var dataDatetime = data.datetime;
    var dataCity = data.city.toLowerCase();
    var dataState = data.state.toLowerCase();
    var dataCountry = data.country.toLowerCase();
    var dataShape = data.shape.toLowerCase();

    // If true, add the datetime, city, etc to the filtered_dataSet, otherwise don't add it
    //return (dataDatetime === filterDatetime) && (dataCity === filterCity) &&
    //       (dataState === filterState) && (dataCountry === filterCountry) &&
    //       (dataShape === filterShape);

    return (dataDatetime.indexOf(filterDatetime) > -1) && 
    (dataCity.indexOf(filterCity) > -1) &&
           (dataState.indexOf(filterState)> -1) && 
           (dataCountry.indexOf(filterCountry)> -1) &&
           (dataShape.indexOf(filterShape)> -1);
  });
  renderTable();
}
// Render the table for the first time on page load
renderTable();