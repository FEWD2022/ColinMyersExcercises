/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector(".js-ball");
let scoreEl = document.querySelector(".js-score");

function declareWinner() {
  document.body.classList.add("game-over");
}

ballEl.addEventListener("click", () => {
  score += 10;
  console.log(score);
  scoreEl.innerHTML = score;

  if (score >= 100) {
    declareWinner();
  }
});
