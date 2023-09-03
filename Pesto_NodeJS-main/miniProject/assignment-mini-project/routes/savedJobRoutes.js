const express = require("express");
const router = express.Router();
const savedJobController = require("../controllers/savedJobController");
const auth = require("../middleware/authMiddleware");

// Save or apply for a job
router.get("/", auth, savedJobController.getAllSavedJobs);

router.post("/:jobId", auth, savedJobController.saveJob);

module.exports = router;
