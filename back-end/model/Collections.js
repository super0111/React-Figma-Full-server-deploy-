const mongoose = require('mongoose');

const collectionsSchema = new mongoose.Schema({
  collectionName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageList: {
    type: Array,
    required: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Collections', collectionsSchema);
