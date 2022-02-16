// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

//Listen for clicks on stop slow go

//Add a class and remove a class on clicks that

// function changeBulbColor(buttonClicked, newColor) {
//     const buttonClicked =
// }

function turnOff() {
  document.querySelector("#stopLight").classList.remove("stop");
  document.querySelector("#slowLight").classList.remove("caution");
  document.querySelector("#goLight").classList.remove("go");
}

function turnRed() {
  turnOff();
  document.querySelector("#stopLight").classList.add("stop");
}

function turnYellow() {
  turnOff();
  document.querySelector("#slowLight").classList.add("caution");
}

function turnGreen() {
  turnOff();
  document.querySelector("#goLight").classList.add("go");
}

document.querySelector("#stopButton").addEventListener("click", turnRed);
document.querySelector("#slowButton").addEventListener("click", turnYellow);
document.querySelector("#goButton").addEventListener("click", turnGreen);
