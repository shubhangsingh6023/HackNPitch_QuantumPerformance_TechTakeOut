const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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

const Product2 = mongoose.model('Product2', UserSchema);

module.exports = Product2;