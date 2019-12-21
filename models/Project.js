const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create Schema

const ProjectSchema = new Schema({
  id: String,
  name: String
});

module.exports = Project = mongoose.model("project", ProjectSchema);
