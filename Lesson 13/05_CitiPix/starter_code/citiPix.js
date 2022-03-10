//Create an array of cities from
let cities = [
  "New York City",
  "San Francisco",
  "Los Angeles",
  "Austin",
  "Sydney",
];

//Make a function that changes the background color of

//Loop through the cities and add them
for (let i = 0; i < cities.length; i++) {
  //For each city create an options object
  let newElement = document.createElement("option");

  //Set the text for that community
  newElement.innerText = cities[i];

  // Add to the select tag
  newElement.setAttribute("value", cities[i]);
  document.getElementById("city-type").appendChild(newElement);
}

document.querySelector("#city-type").addEventListener("change", function (e) {
  let theCityChosen = e.target.value;
  console.log(theCityChosen);

  let theClass = "";
  if (theCityChosen == "New York City") {
    theClass = "nyc";
  } else if (theCityChosen == "San Francisco") {
    theClass = "sf";
  } else if (theCityChosen == "Los Angeles") {
    theClass = "la";
  } else if (theCityChosen == "Austin") {
    theClass = "austin";
  } else {
    theClass = "sydney";
  }

  document.querySelector("body").setAttribute("class", theClass);
});

//Gets a city abbr. as param

//Figure out what class to use

//Set the class of the body

//When the page loads

//Add the cities to the select

//Bind change event of select to function that changes the background
