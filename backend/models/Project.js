const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

  // CLIENT ID schema constructed 
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  
  clientName: {
    type: String,
    required: true,
  },

  // SERVICE TYPE schema constructed
  serviceType: {
    type: String,
    required: true,
  },

  // BUDGET type schema constructed
  budget: {
    type: String,
    required: true,
  },

  // DEADLINE type schema constructed 
  deadline: {
    type: String,
    required: true,
  },

  // DESCRIPTION type schema 
  description: {
    type: String,
    required: true,
  },

  // PROJECT STATUS type schema has been constructed
  status: {
    type: String,

    enum: [

      "Pending",
      "Planning",
      "UI Design",
      "Development",
      "Testing",
      "Deployment",
      "Completed",

    ],

    default: "Pending",
  },

  // ASSIGNED DEVELOPER type schema constructed
  assignedDeveloper: {
    type: String,
    default: "Not Assigned",
  },

  // ESTIMATED COMPLETION DATE type schema constructed
  estimatedCompletion: {
    type: String,
    default: "Not Updated",
  },

  // PROJECT PROGRESS schema has been contructed
  progress: {
    type: Number,
    default: 10,
  },

  // PROJECT FILE schema has been contructed
  projectFile: {
    type: String,
    default: "",
  },

  // CREATED DATE schema has been contructed
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model(
  "Project",
  projectSchema
);
