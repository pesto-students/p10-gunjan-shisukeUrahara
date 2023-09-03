const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  jobType: String,
  location: String,
  description: String,
  remoteokID: String,
});

module.exports = mongoose.model("Job", jobSchema);
