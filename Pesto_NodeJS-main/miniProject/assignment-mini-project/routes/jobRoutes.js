const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");
const auth = require("../middleware/authMiddleware");

// Fetch all job listings
router.get("/", auth, jobController.getAllJobs);

// Fetch job listings based on job type
router.get("/type/:type", auth, jobController.getJobsByType);

// Fetch job listings based on location
router.get("/location/:location", auth, jobController.getJobsByLocation);

// Fetch detailed information about a specific job
router.get("/:jobId", auth, jobController.getJobDetails);

router.post("/fetchAndSaveJobs", jobController.fetchAndSaveJobs);

module.exports = router;
