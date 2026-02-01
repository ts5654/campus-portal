// server.js

const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose'); 
const path = require('path'); // Used for robust route pathing
const authRoutes = require("./routes/authroutes");
const facultyRoutes = require("./routes/FacultyRoute")
require('dotenv').config();

const app = express();

// --- Middleware ---
app.use(cors()); 
app.use(express.json()); // Essential for parsing POST request bodies

// --- Database Connection Function ---
const connectDB = async () => {
    try {
        // Ensure MONGO_URI is correctly set in your .env file
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected successfully! 🟢');
    } catch (err) {
        console.error(`MongoDB Connection Failed: ${err.message} 🔴`);
        // Exit process with failure
        process.exit(1); 
    }
};

// 🚨 CRITICAL FIX: CALL THE DATABASE CONNECTION FUNCTION HERE
connectDB(); 

// --- Routes ---

// Basic Test Route
app.get('/', (req, res) => {
    res.send("Server running successfully.");
});


app.use('/api/auth', authRoutes);

app.use("/api/events", require(path.join(__dirname, 'routes', 'eventRoutes'))); 
app.use('/api/faculties',facultyRoutes)

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
}); 