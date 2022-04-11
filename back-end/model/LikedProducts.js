const mongoose = require('mongoose');

const likedProductsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  liked: {
    type: Boolean,
    required: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('LikedProducts', likedProductsSchema);
