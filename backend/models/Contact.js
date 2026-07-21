const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
//name schema has been constructed
  name: {
    type: String,
    required: true,
  },
//email schema has been constructed
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
