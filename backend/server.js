
require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api'); // Import your routes
const { connectDB } = require('./config/database'); // Import the DB connection function

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
