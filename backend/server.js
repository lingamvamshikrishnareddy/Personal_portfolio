const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api'); // Import your routes
const { connectDB } = require('./config/database'); // Import the DB connection function
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', apiRoutes);

// Catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Export the app
module.exports = app;
