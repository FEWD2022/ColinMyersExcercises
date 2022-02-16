/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector(".js-arena");
let scoreEl = document.querySelector(".js-score");

arenaEl.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-ball")) {
    score += parseInt(event.target.dataset.increment);
    console.log(score);
    scoreEl.innerHTML = score;
  }

  if (score >= 100) {
    declareWinner();
    console.log("game over");
  }
});

function declareWinner() {
  document.body.classList.add("game-over");
}
