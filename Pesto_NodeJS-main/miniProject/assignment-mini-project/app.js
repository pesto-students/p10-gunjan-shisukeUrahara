const express = require("express");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");
const jobRoutes = require("./routes/jobRoutes");
const savedJobRoutes = require("./routes/savedJobRoutes");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));

//  define the routes
app.use("/api/v1/jobs", jobRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/savedJobs", savedJobRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
