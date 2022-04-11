const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  subName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  imageList: {
    type: Array,
    required: false,
  },
  liked: {
    type: Number,
    required: false,
  },
  viewed: {
    type: Number,
    required: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Products', productsSchema);
