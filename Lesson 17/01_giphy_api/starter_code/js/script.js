// ToDo
// When the user submits the search form, make an API request to Giphy's search endpoint
// https://api.giphy.com/v1/gifs/search?api_key="YOURAPIKEY"&q="SEARCHSTRING"
// Display the results in the #giphy-results div provided in the html
// Each new search should replace the previous search results
// CSS Bonus: Use flex or grid properties to display the results in a responsive, clean layout

const apiKey = "tb6ooeIJJpkOQdO8EYMnSbEkHzRENleO";

async function giphySearch(event) {
  // prevent the page from submitting/reloading
  event.preventDefault();

  // get the user input from the form
  const searchQ = document.querySelector(
    "#search-form input[type='text']"
  ).value;

  // make an API call using fetch() - include your API key and the user's search term (template strings are your friend)

  const theRequest =
    "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + searchQ;

  const response = await fetch(theRequest);

  // convert your response data into .json()
  const theData = await response.json();

  // print your data to the console to see its format, dont forget to delete later
  // console.log(theData.data[0]);

  // clear out all gifs from previous searches
  document.querySelector("#giphy-results").innerHTML = "";

  // use a loop to create and append each image to the dom
  for (let i = 0; i < theData.data.length; i++) {
    console.log("i=" + i);
    console.log(theData.data[i].title);

    let newImage = document.createElement("img");
    newImage.setAttribute("src", theData.data[i].images.original.url);
    newImage.setAttribute("alt", theData.data[i].title);

    document.querySelector("#giphy-results").appendChild(newImage);
  }
}

// dont forget your event listener
document.querySelector("#search-form").addEventListener("submit", giphySearch);
