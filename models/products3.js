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

const Product3 = mongoose.model('Product3', UserSchema);

module.exports = Product3;