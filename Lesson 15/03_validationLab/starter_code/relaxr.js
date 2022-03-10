function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  } else {
    return false;
  }
}

function validateSignInForm(e) {
  e.preventDefault();

  // Set up message array
  let messages = new Array();

  // Get password and validate
  const thePassword = document.querySelector("#inputPassword3").value;

  if (thePassword.length <= 3) {
    messages.push("The password is too short");
  }

  // Get email address and validate
  const theEmail = document.querySelector("#inputEmail3").value;

  if (!ValidateEmail) {
    messages.push("The email is invalid");
  }

  // If no error messages show submit message
  let outputMessage = "";
  if (messages.length == 0) {
    outputMessage =
      '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
  } else {
    // Else show error messages
    outputMessage = '<div class="alert alert-danger" role="alert">';
    for (let i = 0; i < messages.length; i++) {
      outputMessage += "<p>" + messages[i] + "</p>";
    }
    outputMessage += "</div>";
  }

  document.getElementById("errorMessages").innerHTML = outputMessage;
}

function validateNewUserForm(e) {
  e.preventDefault();

  // Set up message array

  // Get email address and validate

  // Get passwords and validate
  // Make sure that both passwords match

  // Validate Names

  // If no error messages show submit message
  let outputMessage = "";
  if (messages.length == 0) {
    outputMessage =
      '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
  } else {
    // Else show error messages
    outputMessage = '<div class="alert alert-danger" role="alert">';
    for (let i = 0; i < messages.length; i++) {
      outputMessage += "<p>" + messages[i] + "</p>";
    }
    outputMessage += "</div>";
  }

  document.getElementById("errorMessages").innerHTML = outputMessage;
}

document.addEventListener("DOMContentLoaded", function (event) {
  jQuery("#relaxrExistingUser a").click(function (e) {
    e.preventDefault();
    jQuery(this).tab("show");
  });

  // Bind a validation function to the submit of the login form
  document
    .querySelector("#home .relaxrLoginForm")
    .addEventListener("submit", validateSignInForm);

  // Bind a validation function to the submit of the profile
  document
    .querySelector("#profile .relaxrLoginForm")
    .addEventListener("submit", validateSignInForm);
});
