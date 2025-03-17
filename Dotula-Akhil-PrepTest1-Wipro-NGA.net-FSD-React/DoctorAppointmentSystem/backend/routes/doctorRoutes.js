const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const doctorsFile = path.join(__dirname, "../data/doctors.json");

// GET all doctors
router.get("/", (req, res) => {
  fs.readFile(doctorsFile, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ message: "Error reading doctors data" });
    res.json(JSON.parse(data));
  });
});

module.exports = router;
