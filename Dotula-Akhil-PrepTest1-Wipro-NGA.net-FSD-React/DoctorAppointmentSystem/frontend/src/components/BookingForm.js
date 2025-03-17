import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [availableTimes, setAvailableTimes] = useState([]);

    // Fetch available time slots from the backend
    useEffect(() => {
        axios.get("http://localhost:5000/api/appointments/available-times")
            .then(response => {
                console.log("Available times:", response.data); // Debugging log
                setAvailableTimes(response.data);
            })
            .catch(error => {
                console.error("Error fetching available times:", error);
            });
    }, []);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !date || !time) {
            alert("All fields are required!");
            return;
        }

        const appointmentData = { name, email, date, time };

        axios.post("http://localhost:5000/api/appointments/book", appointmentData)
            .then(response => {
                alert(response.data.message);
            })
            .catch(error => {
                console.error("Error booking appointment:", error);
                alert("Failed to book appointment. Please try again.");
            });
    };

    return (
        <div>
            <h2>Book an Appointment with</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Email: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Date: </label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

                <label>Time: </label>
                <select value={time} onChange={(e) => setTime(e.target.value)} required>
                    <option value="">Select Time</option>
                    {availableTimes.length === 0 && <option disabled>Loading...</option>}
                    {availableTimes.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                    ))}
                </select>

                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default BookingForm;
