// server.js
const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse incoming JSON
app.use(express.json());

// Serve static files from the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// GET example route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// POST route to save profile data
app.post('/api/save-profile', (req, res) => {
  const userProfile = req.body;
  console.log('Received profile data:', userProfile);

  // Here you could store data in a database (e.g. MongoDB)
  res.json({
    message: `Profile for ${userProfile.name} received successfully!`
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});