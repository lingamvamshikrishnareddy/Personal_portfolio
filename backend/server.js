const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api'); // Adjust the path if necessary
const { connectDB } = require('./config/database');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// API routes
app.use('/api', apiRoutes);

// Serve the frontend application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

module.exports = app;
