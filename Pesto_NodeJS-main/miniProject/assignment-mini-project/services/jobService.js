const Job = require("../models/jobModel");

exports.getAllJobs = async () => {
  try {
    return await Job.find({});
  } catch (error) {
    throw new Error("Failed to fetch all jobs");
  }
};

exports.getJobsByType = async (type) => {
  try {
    return await Job.find({ jobType: type });
  } catch (error) {
    throw new Error(`Failed to fetch jobs of type ${type}`);
  }
};

exports.getJobsByLocation = async (location) => {
  try {
    return await Job.find({ location });
  } catch (error) {
    throw new Error(`Failed to fetch jobs in ${location}`);
  }
};

exports.getJobDetails = async (jobId) => {
  try {
    return await Job.findById(jobId);
  } catch (error) {
    throw new Error(`Failed to fetch job details for ${jobId}`);
  }
};
