// Create a function to "saveProfile"
function saveProfile() {
  let userName = document.getElementById('name').value;
  let userEmail = document.getElementById('email').value;
  let userTelephone = document.getElementById('phone').value;
  let userOccupation = document.getElementById('occupation').value;
  let userAge = document.getElementById('age').value;
  const message = `User ${userName} is ${userAge} years old.`;
  document.getElementById("output").textContent = message;
}