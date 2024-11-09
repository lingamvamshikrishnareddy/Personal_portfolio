const mongoose = require('mongoose');

const PageVisitSchema = new mongoose.Schema({
  page: {
    type: String,
    required: true,
  },
  visitCount: {
    type: Number,
    default: 1,
  },
  lastVisited: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('PageVisit', PageVisitSchema);