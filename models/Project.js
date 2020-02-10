const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema

const ProjectSchema = new Schema({
  iconClass: String,
  projectTitle: String,
  projectDescription: String
});

module.exports = Project = mongoose.model("project", ProjectSchema);

