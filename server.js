const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: 'agustinpelle@hotmail.com',
    pass: 'agustin42114698',
  },
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'agustinpelle@hotmail.com',
    subject: `New contact form submission from ${name}`,
    text: message,
    html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
