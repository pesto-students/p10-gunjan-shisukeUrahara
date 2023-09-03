const jobService = require("../services/jobService");
const Job = require("../models/jobModel");
const axios = require("axios");

exports.fetchAndSaveJobs = async () => {
  try {
    const response = await axios.get("https://remoteok.io/api");

    const jobs = response.data;

    jobs.forEach(async (job) => {
      const newJob = new Job({
        title: job.position,
        company: job.company,
        jobType: job.tags ? job?.tags[0] : "developer", // Assuming the first tag is the job type
        location: job.location,
        description: job.description,
        remoteokID: job.id,
      });

      await newJob.save();
    });

    return true;
  } catch (error) {
    throw new Error("Error fetching and saving jobs");
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await jobService.getAllJobs();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch all jobs", error });
  }
};

exports.getJobsByType = async (req, res) => {
  try {
    const { type } = req.params;
    const jobs = await jobService.getJobsByType(type);
    res.status(200).json(jobs);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to fetch jobs of type ${type}`, error });
  }
};

exports.getJobsByLocation = async (req, res) => {
  try {
    const { location } = req.params;
    const jobs = await jobService.getJobsByLocation(location);
    res.status(200).json(jobs);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to fetch jobs in ${location}`, error });
  }
};

exports.getJobDetails = async (req, res) => {
  try {
    const { jobId } = req.params;
    const job = await jobService.getJobDetails(jobId);
    res.status(200).json(job);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Failed to fetch job details for ${jobId}`, error });
  }
};
