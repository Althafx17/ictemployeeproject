const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  name : {
    type: String,
    required: true
  },
  phone : {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
});


const User = mongoose.model('User', UserSchema);

module.exports = User;