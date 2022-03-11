function selectPet(petType) {
  // Get the specific pet data set
  const thePet = petData[petType];

  // Set the title
  document.querySelector(".petDisplayName").innerText = thePet.displayName;

  // Empty the specification data
  document.querySelector(".petsDataSpecs").innerHTML = "";

  // Add the space required, size, weight
  let listData = "";

  listData += "<dt>Space Required</dt>";
  listData += "<dd>" + thePet.spaceRequired + "</dd>";

  listData += "<dt>Weight</dt>";
  listData += "<dd>" + thePet.weight + "</dd>";

  listData += "<dt>Size</dt>";
  listData += "<dd>" + thePet.size + "</dd>";

  // Add logic to add the trainability and lap size images
  listData += "<dt>Trainability</dt>";

  if (thePet.trainability) {
    listData +=
      '<dd><img class="checkmark" src="./img/200px-Gnome-emblem-default.svg.png " alt="Yes"/></dd>';
  } else {
    ('<dd><img class="checkmark" src="./img/200px-Gnome-emblem-unreadable.svg.png" alt="No"/></dd>');
  }

  // Add the foods (may require loop)
  listData += "<dt>Trainability</dt>";
  listData += "<dd><ul>";
  for (let i = 0; i < thePet.foods.length; i++) {
    listData += "<li>" + thePet.foods[i] + "</li>";
  }
  listData += "</dd>";

  // Update the images

  //set the big img
  document
    .querySelector(".photoLarge")
    .setAttribute("src", thePet.images[0].img);

  document
    .querySelector(".photoLarge")
    .setAttribute("alt", thePet.images[0].alt);

  //add the thumbnailsHTML
  let theThumbnails = "";

  for (let i = 0; i < thePet.images.length; i++) {
    theThumbnails +=
      '<a href="' +
      thePet.images[i].img +
      '"><img class="photoThumb" src=\'' +
      thePet.images[i].thumb +
      "' alt='" +
      thePet.images[i].thumb +
      "'/></a>";
  }

  document.querySelector(".thumbHaus").innerHTML = theThumbnails;

  // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)
  let theThumbnailTags = document.querySelectorAll(".thumbHaus > a");

  for (let i = 0; i < theThumbnailTags.length; i++) {
    theThumbnailTags[i].addEventListener("click", function (e) {
      e.preventDefault();
      let theBigImageURL = this.getAttribute("href");

      let theAlt = this.querySelector(".photoThumb").getAttribute("alt");

      document.querySelector(".photoLarge").setAttribute("src", theBigImageURL);

      document.querySelector(".photoLarge").setAttribute("alt", theAlt);
    });
  }

  // Empty the ideal for
  document.querySelector(".idealFor").innerHTML = "";

  // Insert the ideal for
  let myListItems = "";

  for (let i = 0; i < thePet.idealOwner.length; i++) {
    myListItems += "<li>" + thePet.idealOwner[i] + "</li>";
  }

  document.querySelector(".idealFor").innerHTML = myListItems;

  //   // Empty the Adoption Groups
  //   let adoptionGroups = "";

  //   // Add the adoption groups
  //   listData += "<dt>Adoption Groups</dt>";

  //   //Create a loop for the array of Adoption
  //   listData += "<dd>";
  //   for (let i = 0; i < thePet.adoption.length; i++) {
  //     adoptionGroups += "<li>" + thePet.adoption[name] + "<li>";
  //   }
  //   listData += "</dd>";

  //Make a list

  //Put links in the list

  //Set attribute of the links

  document.querySelector(".petsDataSpecs").innerHTML = listData;
} // end selectPet

document.addEventListener("DOMContentLoaded", function (event) {
  // Initial run
  selectPet("dog");
  //Update whenever a new value is picked
  document.querySelector("#petType").addEventListener("change", function () {
    //Get the selected petType
    let selectedPet = document.querySelector("#petType").value;
    console.log(`The selected pet is ${selectedPet}`);

    // call selectPet
    selectPet(selectedPet);
  });
});
