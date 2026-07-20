const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

  // CLIENT ID schema constructed using mongoose.schema.types
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  // CLIENT NAME schema constructed
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

  // DEADLINE type schema
  deadline: {
    type: String,
    required: true,
  },

  // DESCRIPTION type schema 
  description: {
    type: String,
    required: true,
  },

  // PROJECT STATUS type schema constructed
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

  // PROJECT PROGRESS
  progress: {
    type: Number,
    default: 10,
  },

  // PROJECT FILE
  projectFile: {
    type: String,
    default: "",
  },

  // CREATED DATE
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model(
  "Project",
  projectSchema
);
