function processMood(evt) {
  evt.preventDefault();
  let moodValue = document.querySelector("#mood").value;
  moodValue = moodValue.toLowerCase().trim();

  if (
    moodValue == "excited" ||
    moodValue == "ecstatic" ||
    moodValue == "fantastic" ||
    moodValue == "happy" ||
    moodValue == "good" ||
    moodValue == "great"
  ) {
    document.querySelector(".moodring div").setAttribute("class", "excited");
  }

  if (moodValue == "bad" || moodValue == "angry") {
    document.querySelector(".moodring div").setAttribute("class", "bad");
  }
}

document.querySelector("#submit-btn").addEventListener("click", processMood());
