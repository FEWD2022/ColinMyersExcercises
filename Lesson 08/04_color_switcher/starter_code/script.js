// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

//Target body tag and set the class to be gray for
// function to tunr on light mode

//listen for click on gray button
//listen for click on white button

function darkMode() {
  document.querySelector("body").setAttribute("class", "darkMode");
}

function lightMode() {
  document.querySelector("body").classList.remove("darkMode");
}

document.querySelector("#grayButton").addEventListener("click", darkMode);
document.querySelector("#whiteButton").addEventListener("click", lightMode);
