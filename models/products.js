const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  foodid: {
    type: String,
    required: true
  },
  
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  }
  
});

const Product = mongoose.model('Product', UserSchema);

module.exports = Product;