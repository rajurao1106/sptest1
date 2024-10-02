const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 2000;

// Configure multer for file upload
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.json());
app.use(cors());

// Handle file upload and email sending
app.post('/send-email', upload.single('file'), async (req, res) => {
  const { firstName, lastName, experience, number } = req.body;
  const file = req.file;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "rajurao1106@gmail.com", // Your Gmail address
        pass: "swqw foua utme cmvm",
    },
  });

  try {
    const mailOptions = {
      from: "rajurao1106@gmail.com",
      to: 'rajurao1106@gmail.com',
      subject: 'File Upload and Message',
      text: firstName,
      html: `<b>${firstName}</b><br/><b>${lastName}</b><br/><b>${experience}</b><br/><b>${number}</b>`,
      attachments: file ? [{
        filename: file.originalname,
        path: file.path
      }] : []
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent: %s", info.messageId);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending mail: ", error);
    res.status(500).send("Failed to send email.");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
