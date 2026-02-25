// ==============================
// IMPORTS
// ==============================
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
const User = require("./models/User");

const app = express();

// Middleware to read JSON
app.use(express.json());

// ==============================
// CONNECT TO MONGODB ATLAS
// ==============================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

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
POST : ADD NEW USER
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
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
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
    res.send("✅ User deleted");
  } catch (err) {
    res.status(400).send("Error deleting user");
  }
});

// ==============================
// SERVER
// ==============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
