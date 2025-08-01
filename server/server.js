require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");
const Lead = require("./models/lead");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Routes
app.post("/api/leads", async (req, res) => {
  try {
    const { name, email, phone, businessType, message } = req.body;

    // Validate required fields
    if (!name || !email || !businessType) {
      return res
        .status(400)
        .json({ error: "Name, email, and business type are required" });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Create new lead
    const newLead = new Lead({
      name,
      email,
      phone,
      businessType,
      message,
      createdAt: new Date(),
    });

    // Save to database
    const savedLead = await newLead.save();

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Demo Request from Growly Landing Page",
      html: `
        <h2>New Lead Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Message:</strong> ${message || "Not provided"}</p>
        <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "Demo request submitted successfully!",
      lead: savedLead,
    });
  } catch (error) {
    console.error("Error submitting lead:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Admin route to get all leads
app.get("/api/admin/leads", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
