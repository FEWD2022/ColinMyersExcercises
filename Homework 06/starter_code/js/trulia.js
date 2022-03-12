let navToggle = document.querySelector(".trulia-nav-toggle");
let navItems = document.querySelectorAll(".trulia-nav-mobilehide");

let truliaCards = document.getElementsByClassName("trulia-grid-item");

document.addEventListener("DOMContentLoaded", function (event) {
  // Toggle the navigation
  // Loop through all the cards
  // Add a click listener on each card
  // Remove the featured class
  // Add the featured class on the one clicked on
  navToggle.addEventListener("click", function (e) {
    e.preventDefault();

    for (let i = 0; i < navItems.length; i++) {
      navItems[i].classList.toggle("trulia-nav-mobilehide");
    }
  });

  for (let i = 0; i < truliaCards.length; i++) {
    truliaCards[i].addEventListener("click", function () {
      for (let j = 0; j < truliaCards.length; j++) {
        truliaCards[j].classList.remove("trulia-featured-grid-item");
      }

      this.classList.add("trulia-featured-grid-item");
    });
  }
});
