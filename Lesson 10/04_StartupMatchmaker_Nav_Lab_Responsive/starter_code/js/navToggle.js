document.addEventListener("DOMContentLoaded", function (event) {
  //When i click on the menu
  document.querySelector(".nav-toggle").addEventListener("click", function (e) {
    //prevent the link from working on
    e.preventDefault();

    //add or remove the mobile hide class
    document.querySelector(".main-nav").classList.toggle("main-nav-mobilehide");
  });
});
