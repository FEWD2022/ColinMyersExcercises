function validateOrderQty(e) {
  // Get the requested quantity
  let orderQty = parseInt(document.getElementById("pbeOrderQty").value);

  // If quantity is above or below the allowed then show alert message
  if (orderQty < 10 || orderQty > 200) {
    alert("Please limit your order to a quantity between 10 and 200.");
  } else if (isNaN(orderQty)) {
    // Show acceptance alert message if allowed quantity
    alert("Please enter a number");
  } else {
    alert("Your order has been submitted");
    document.getElementById("pbeOrderQty").value = "";
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  document
    .querySelector("#pbeOrderSubmit")
    .addEventListener("click", validateOrderQty);

  document
    .querySelector("#pbeDescCharacteristics header a")
    .addEventListener("click", function (e) {
      document
        .getElementById("pbeDescCharacteristics")
        .classList.toggle("pbeDescAccordionCollapsed");
    });

  document
    .querySelector("#pbeDescHistory header")
    .addEventListener("click", function (e) {
      e.preventDefault();
      document
        .getElementById("pbeDescHistory")
        .classList.toggle("pbeDescAccordionCollapsed");
    });
});
