const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    // username: { type: String, required: true },
    projectname: { type: String, required: true }
    // date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
