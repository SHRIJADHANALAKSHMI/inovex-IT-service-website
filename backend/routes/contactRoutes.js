const express = require("express");

const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    const { name, email, message } = req.body;

    const newMessage = new Contact({
      name,
      email,
      message,
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});
router.get("/", async (req, res) => {

  try {

    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json(contacts);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }

});

module.exports = router;