const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const { connectDB } = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', apiRoutes);

module.exports = app;