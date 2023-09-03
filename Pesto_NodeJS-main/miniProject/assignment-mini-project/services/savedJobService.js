const SavedJob = require("../models/savedJobModel");

exports.getAllSavedJobs = async (userId) => {
  try {
    return await SavedJob.find({ userId });
  } catch (error) {
    throw new Error("Error fetching all saved jobs for user");
  }
};

exports.saveJob = async (userId, jobId) => {
  try {
    const newSavedJob = new SavedJob({ userId, jobId });
    return await newSavedJob.save();
  } catch (error) {
    throw new Error("Error saving job for user");
  }
};
