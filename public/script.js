// Create a function to "saveProfile"
function saveProfile() {
  let userName = document.getElementById('name').value;
  let userEmail = document.getElementById('email').value;
  let userTelephone = document.getElementById('phone').value;
  let userOccupation = document.getElementById('occupation').value;
  let userAge = document.getElementById('age').value;

  const profileData = {
    name: userName,
    email: userEmail,
    phone: userTelephone,
    occupation: userOccupation,
    age: userAge
  };

  // Show preview message
  const message = `User ${userName} is ${userAge} years old.`;
  document.getElementById("output").textContent = message;

  // Send data to backend using POST
  fetch('/api/save-profile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(profileData)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
      alert(data.message || 'Profile saved successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to save profile');
    });
}