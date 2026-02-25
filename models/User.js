// Import mongoose
const mongoose = require("mongoose");

// Create User Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  age: {
    type: Number,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
module.exports = mongoose.model("User", UserSchema);
