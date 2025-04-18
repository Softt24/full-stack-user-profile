const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse incoming JSON
app.use(express.json());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, '../public')));

// GET route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// POST route to save profile data
app.post('/api/save-profile', (req, res) => {
  const userProfile = req.body;
  console.log('Received profile data:', userProfile);

  // Saving data
  res.json({
    message: `Profile for ${userProfile.name} received successfully!`
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
