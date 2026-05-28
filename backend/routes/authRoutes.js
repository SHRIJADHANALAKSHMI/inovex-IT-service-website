const express = require("express");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


// ================= SIGNUP =================

router.post("/signup", async (req, res) => {

  try {

    const {
      name,
      email,
      password,
    } = req.body;

    // Check Existing User
    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {

      return res.status(400).json({
        message: "User already exists",
      });

    }

    // Encrypt Password
    const hashedPassword = await bcrypt.hash(
      password,
      10
    );

    // Create User
    const user = new User({

      name,
      email,
      password: hashedPassword,

    });

    await user.save();

    res.status(201).json({
      message: "Signup Successful",
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }
});


// ================= LOGIN =================

router.post("/login", async (req, res) => {

  try {

    const {
      email,
      password,
    } = req.body;

    // Find User
    const user = await User.findOne({
      email,
    });

    if (!user) {

      return res.status(400).json({
        message: "User not found",
      });

    }

    // Compare Password
    const isMatch = await bcrypt.compare(

      password,

      user.password

    );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid credentials",
      });

    }

    // Generate Token
    const token = jwt.sign(

      {
        id: user._id,
        role: user.role,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }

    );

    res.status(200).json({

      message: "Login Successful",

      token,

      user: {

        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,

      },

    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }

});

module.exports = router;