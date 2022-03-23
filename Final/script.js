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

  //Make a for loop to get 5 random menu items
  for (let i = 0; i < 5; i++) {
    //pick a random number (within the array)
    let randomRecipe = Math.floor(Math.random() * data.meals.length);

    //Image
    const mealImg = data.meals[randomRecipe].strMealThumb;

    //title
    const mealName = data.meals[randomRecipe].strMeal;

    //5 ingredients
    const ingredient1 = data.meals[randomRecipe].strIngredient1;
    const ingredient2 = data.meals[randomRecipe].strIngredient2;
    const ingredient3 = data.meals[randomRecipe].strIngredient3;
    const ingredient4 = data.meals[randomRecipe].strIngredient4;
    const ingredient5 = data.meals[randomRecipe].strIngredient5;
    const mealLink = data.meals[randomRecipe].strYoutube;

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
  }
});
