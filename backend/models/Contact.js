const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
//name schema 
  name: {
    type: String,
    required: true,
  },
//email schema 
  email: {
    type: String,
    required: true,
  },
//message schema has been constructed
  message: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model("Contact", contactSchema);
