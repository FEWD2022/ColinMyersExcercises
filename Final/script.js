const menuRow = document.querySelector("#menu");
let data = "";

//when page loads, fire the scripts
document.addEventListener("DOMContentLoaded", async function (e) {
  e.preventDefault();

  //get the data from the API
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
  );
  data = await response.json();

  //Make an array
  const arr = [];
  while (arr.length < 5) {
    //Get a random number within the length of the meals array
    const r = Math.floor(Math.random() * data.meals.length);

    //If it isn't already in the array, add it to the array
    if (arr.indexOf(r) === -1) {
      arr.push(r);
    }
  }

  //For each item in the array, add it to the DOM
  arr.forEach((item) => {
    //Image
    const mealImg = data.meals[item].strMealThumb;

    //title
    const mealName = data.meals[item].strMeal;

    //5 ingredients
    const ingredient1 = data.meals[item].strIngredient1;
    const ingredient2 = data.meals[item].strIngredient2;
    const ingredient3 = data.meals[item].strIngredient3;
    const ingredient4 = data.meals[item].strIngredient4;
    const ingredient5 = data.meals[item].strIngredient5;
    const mealLink = data.meals[item].strYoutube;

    //insert into HTML
    let snippet = `<div class="col d-flex align-items-stretch">
    <div class="card">
      <img
        src="${mealImg}"
        class="card-img-top"
        alt="${mealName}"
      />
      <div class="card-body">
        <h5 class="card-title">${mealName}</h5>
        <p class="card-text">
          ${ingredient1}, ${ingredient2}, ${ingredient3}, ${ingredient4}, ${ingredient5}
        </p>
        <a href="${mealLink}" class="btn btn-primary">Make it</a>
      </div>
    </div>
  </div>`;

    menuRow.innerHTML += snippet;
  });
});
