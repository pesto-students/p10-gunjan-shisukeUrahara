const savedJobService = require("../services/savedJobService");

exports.getAllSavedJobs = async (req, res) => {
  try {
    const userId = req.user.id;
    const savedJobs = await savedJobService.getAllSavedJobs(userId);
    res.status(200).json(savedJobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.saveJob = async (req, res) => {
  try {
    const userId = req.user.id;
    const { jobId } = req.body;
    const savedJob = await savedJobService.saveJob(userId, jobId);
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
