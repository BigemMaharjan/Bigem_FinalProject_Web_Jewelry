// routes/users.js
const express = require("express");
const uRouter = express.Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// User registration
uRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body; // include isAdmin in the request body
    const user = new User({ name, email, password, isAdmin });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// User login
uRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      "your_jwt_secret" // Secret key: Used to sign the token
      // { expiresIn: "1h" } // token expiration
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = uRouter;
