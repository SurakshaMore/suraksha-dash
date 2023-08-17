// script.js
const confirmButton = document.querySelector(".confirm-button1");
const cancelButton = document.querySelector(".cancel-button1");
const patientContainer = document.querySelector(".patientContainer1");
const patientInfo = document.querySelector(".patientInfo1");

confirmButton.addEventListener("click", function() {
  patientInfo.innerHTML = "<p>Appointment Confirmed.</p>";
  patientContainer.classList.add("confirmed1");
 
});

cancelButton.addEventListener("click", function() {
  patientInfo.innerHTML = "<p>Appointment Canceled</p>";
  patientContainer.classList.add("canceled1");
});
