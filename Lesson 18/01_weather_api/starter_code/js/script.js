// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results

const myApiKey = "c67b9bddce4ffefaa6e8edb814da71ce";

async function handleWeatherRequest(e) {
  e.preventDefault();

  // get user input value from textbox
  const searchInput = document.querySelector(
    "#weather-search input[name=city]"
  ).value;

  // build the url address with YOUR personal API key and the users input city
  const firstFetchURL =
    "http://api.openweathermap.org/geo/1.0/direct?appid=" +
    myApiKey +
    "&q=" +
    searchInput +
    "&limit=1";

  // make an API call using fetch() and capture the response in a variable
  const theFirstResponse = await fetch(firstFetchURL);

  // convert the response to a readable json format with .json()
  const theFirstResponseJSON = await theFirstResponse.json();

  // print your data to the console to see its format, dont forget to delete later
  console.log(theFirstResponseJSON);

  //if the response doesnt have a matches
  if (theFirstResponseJSON.length == 0) {
    return false;
  }

  //if there is a match
  const lat = theFirstResponseJSON[0].lat;
  const lon = theFirstResponseJSON[0].lon;

  const theSecondFetchURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    myApiKey;

  const theSecondResponse = await fetch(theSecondFetchURL);

  const theSecondResponseJSON = await theSecondResponse.json();
  console.log(theSecondResponseJSON);

  // build the icon src

  let temperatureListItems = "";

  temperatureListItems +=
    "<li> Current Temp: " +
    kelvinToFarenheight(theSecondResponseJSON.main.temp).toFixed(2) +
    "</li>";
  temperatureListItems +=
    "<li> Feels Like: " +
    kelvinToFarenheight(theSecondResponseJSON.main.feels_like).toFixed(2) +
    "</li>";
  temperatureListItems +=
    "<li> Low: " +
    kelvinToFarenheight(theSecondResponseJSON.main.temp_min).toFixed(2) +
    "</li>";
  temperatureListItems +=
    "<li> High: " +
    kelvinToFarenheight(theSecondResponseJSON.main.temp_max).toFixed(2) +
    "</li>";

  document.querySelector("#weather-results").innerHTML = temperatureListItems;

  // create icon img tag

  // add icon url as src

  // clear out previous icon img

  // print all results to dom

  // append icon img to dom
}

// Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C
function kelvinToFarenheight(k) {
  return (k - 273.15) * (9 / 5) + 32;
}

// Attach an event listener to the submit button
document
  .querySelector("#weather-search")
  .addEventListener("submit", handleWeatherRequest);
