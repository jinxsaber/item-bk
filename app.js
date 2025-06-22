require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const mongoose = require('mongoose');
const router = require('./routes/itemRoutes');

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/', router);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));


module.exports = app;