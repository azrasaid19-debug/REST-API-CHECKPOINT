// ==============================
// IMPORTS
// ==============================

// Import express to create the server
const express = require("express");

// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Import dotenv to use environment variables from .env file
require("dotenv").config({ path: "./config/.env" });

// Import User model
const User = require("./models/User");

// Create express app
const app = express();

// Middleware to parse JSON data from requests
app.use(express.json());

// ==============================
// CONNECT TO MONGODB
// ==============================

// Connect using the URI stored in .env file
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Connection Error:", err));

// ==============================
// ROUTES
// ==============================

/*
GET : RETURN ALL USERS
*/
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send("Error fetching users");
  }
});

/*
POST : ADD A NEW USER TO DATABASE
*/
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(400).send("Error creating user");
  }
});

/*
PUT : EDIT USER BY ID
*/
app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }, // return updated document
    );

    res.json(updatedUser);
  } catch (err) {
    res.status(400).send("Error updating user");
  }
});

/*
DELETE : REMOVE USER BY ID
*/
app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("Error deleting user");
  }
});

// ==============================
// START SERVER
// ==============================

// Use PORT from .env or default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
