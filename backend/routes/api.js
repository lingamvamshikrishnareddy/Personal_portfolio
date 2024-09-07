const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const PageVisit = require('../models/pageVisit');

// Contact form submission
// Contact form submission
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact form', error: error.message });
  }
});


// Page visit tracking
router.post('/pagevisit', async (req, res) => {
  try {
    const { page } = req.body;
    const pageVisit = await PageVisit.findOne({ page });
    if (pageVisit) {
      pageVisit.visitCount += 1;
      pageVisit.lastVisited = Date.now();
      await pageVisit.save();
    } else {
      await PageVisit.create({ page });
    }
    res.status(200).json({ message: 'Page visit recorded' });
  } catch (error) {
    res.status(500).json({ message: 'Error recording page visit', error: error.message });
  }
});

module.exports = router;
