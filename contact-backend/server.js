import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create a transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App Password for Gmail with 2FA enabled
  },
  debug: true, // Enable debug output
});

// Verify transporter connection
transporter.verify((error) => {
  if (error) {
    console.error('SMTP connection error:', error);
    console.log('Email credentials being used:');
    console.log('- User:', process.env.EMAIL_USER);
    console.log('- Password length:', process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0);
    console.log('Make sure you have:');
    console.log('1. Enabled "Less secure app access" or');
    console.log('2. Created an App Password if using 2FA');
    console.log('3. Removed any spaces from the App Password');
  } else {
    console.log('Server is ready to send emails');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please provide all required fields' });
  }

  // Log the received form data for debugging
  console.log('Received contact form submission:');
  console.log('- Name:', name);
  console.log('- Email:', email);
  console.log('- Message:', message.substring(0, 30) + '...');

  try {
    // Email to portfolio owner
    const mailToOwner = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: 'mekalavamshiyadav46@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Confirmation email to the user
    const mailToUser = {
      from: `"Vamshi Yadav" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting me',
      html: `
        <h3>Thank you for reaching out!</h3>
        <p>Hello ${name},</p>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <p><em>${message}</em></p>
        <p>Best regards,</p>
        <p>Vamshi Yadav</p>
      `,
    };

    try {
      // Send emails
      await transporter.sendMail(mailToOwner);
      console.log('Email to owner sent successfully');
      await transporter.sendMail(mailToUser);
      console.log('Confirmation email to user sent successfully');
      
      res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      
      // For development/demo purposes, still return success even if email fails
      // In production, you would want to handle this differently
      console.log('DEVELOPMENT MODE: Returning success despite email failure');
      res.status(200).json({ 
        success: true, 
        message: 'Your message has been received! (Note: Email delivery is currently in demo mode)' 
      });
    }
  } catch (error) {
    console.error('Error in contact form processing:', error);
    res.status(500).json({ success: false, message: 'Failed to process your message. Please try again later.' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});