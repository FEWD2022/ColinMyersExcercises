// This function will get the values of the two word forms, pass them to the compare function the update the display output

function conjunctionFormChecking() {
  // Create output variables
  var contractionFound = "";
  var logEntry = "";

  // Get words from search forms
  let firstWord = document
    .querySelector("#firstWord")
    .value.trim()
    .toLowerCase();
  let secondWord = document
    .querySelector("#secondWord")
    .value.trim()
    .toLowerCase();

  // Create phrase to test by combining wordOne and wordTwo with a space
  let theTestPhrase = firstWord + " " + secondWord;
  console.log(theTestPhrase);

  // Note - there is already a function called "checkForConjunction(testPhrase)" that will return the conjunction OR false
  let theResult = checkForConjunction(theTestPhrase);
  console.log(theResult);

  // Test phrase
  // if Test Phrase returns false search phrase with words in reverse order
  if (theResult == false) {
    theTestPhrase = `${secondWord} ${firstWord}`;
    theResult = checkForConjunction(theTestPhrase);
  }

  if (theResult != false) {
    let output = theResult;
    let logRecord = `${firstWord} ${secondWord} ${theResult}`;
    document.getElementById("contractionResult").innerText = output;
    let theLogElement = document.createElement("p");
    theLogElement.innerText = logRecord;
    document.querySelector(".playAreaResultsLog").appendChild(theLogElement);
  } else {
    let output = "None found";
    let logRecord = `${firstWord} ${secondWord} None found`;
    document.getElementById("contractionResult").innerText = output;
    let theLogElement = document.createElement("p");
    theLogElement.innerText = logRecord;
    document.querySelector(".playAreaResultsLog").appendChild(theLogElement);
  }

  // Empty wordOne
  document.querySelector("#firstWord").value = "";

  // Empty wordTwo
  document.querySelector("#secondWord").value = "";
} // end conjunctionFormChecking

function resetAllForms(e) {
  e.preventDefault();

  // Empty Result
  document.querySelector("#contractionResult").innerText = "";

  // Empty wordOne
  document.querySelector("#firstWord").value = "";

  // Empty wordTwo
  document.querySelector("#secondWord").value = "";

  // Empty the log
  document.querySelector(".playAreaResultsLog").innerText = "";
}

// resetAllForms
document.addEventListener("DOMContentLoaded", function (event) {
  // Bind conjunctionFormChecking to button
  document
    .querySelector("#btnCheckConjunction")
    .addEventListener("click", conjunctionFormChecking);

  // Bind reset to button
  document.getElementById("btnReset").addEventListener("click", resetAllForms);
});
