const express = require("express");
const router = express.Router();

// Sample available times (you can modify this based on actual data)
const availableTimes = ["10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"];

// Route to get available time slots
router.get("/available-times", (req, res) => {
    console.log("Sending available times:", availableTimes); // Debugging log
    res.json(availableTimes);
});

// Route to handle booking an appointment
router.post("/book", (req, res) => {
    const { name, email, date, time } = req.body;

    if (!name || !email || !date || !time) {
        return res.status(400).json({ message: "All fields are required" });
    }

    console.log("Booking appointment for:", { name, email, date, time });
    
    return res.status(200).json({ message: "Appointment booked successfully!" });
});

module.exports = router;
