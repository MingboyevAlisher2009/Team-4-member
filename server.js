const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Sizning email manzilingiz
            pass: 'your-password', // Sizning email parolingiz
        },
    });

    // Email ma'lumotlari
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Mavzu',
        text: message,
    };

    // Emailni yuborish
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).json({ success: false, error: error.message });
        } else {
            console.log('Email jo\'natildi: ' + info.response);
            res.status(200).json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Server ishga tushdi http://localhost:${port}`);
});
