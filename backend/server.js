const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const mongoURI = process.env.MONGO; // Get MongoDB URI from .env
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// JWT Secret (for additional use cases like authentication)
const jwtSecret = process.env.JWT_SECRET;

// Define the schema and model
const messageSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  service: String,
  message: String,
});

const Message = mongoose.model("Message", messageSchema);

// API Routes
app.post("/api/messages", async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message saved successfully" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
});

// Base Route for Health Check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Server Setup
const PORT = process.env.PORT || 5001; // Use the PORT from .env or default to 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
