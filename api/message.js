const mongoose = require("mongoose");

// MongoDB connection
const mongoURI = process.env.MONGO;
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define message schema and model
const messageSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  service: String,
  message: String,
});

const Message = mongoose.model("Message", messageSchema);

module.exports = async (req, res) => {
  if (req.method === "POST") {
    try {
      const newMessage = new Message(req.body);
      await newMessage.save();
      res.status(201).json({ message: "Message saved successfully" });
    } catch (error) {
      console.error("Error saving message:", error);
      res.status(500).json({ error: "Failed to save message" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};
