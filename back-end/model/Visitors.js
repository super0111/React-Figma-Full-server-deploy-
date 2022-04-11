const mongoose = require('mongoose');

const visitorsSchema = new mongoose.Schema({
  todayVisitors: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Visitors', visitorsSchema);
