const express = require('express');
const path = require('path');
const app = express();

// Set the public folder to serve static files (your models and HTML)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
