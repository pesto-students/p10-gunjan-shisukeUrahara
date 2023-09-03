const mongoose = require("mongoose");

const savedJobSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  status: String,
});

module.exports = mongoose.model("SavedJob", savedJobSchema);
