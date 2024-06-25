import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  });

// Define a schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate the input
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Send email notification to user
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New contact received',
      text: `Dear admin,\n\nWe received a new contact.\n\nDetails are as below\nName:${name},\nEmail: ${email},\nPhone no:${phone},\nMessage:${message}\n\n Thankyou from Portfolio project`,
      html: `<p>Dear admin,</p><p>We received a new contact. Details are as below.</p><p>Name:${name},<br>Email: ${email}<br>Phone no:${phone}<br>Message:${message}<br><br>Thankyou from Portfolio project</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      console.log('Email sent: ' + info.response);
      res.status(201).json({ message: 'Message sent successfully and notification email sent!' });
    });

  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Other routes...

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
