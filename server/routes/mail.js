var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

const port = process.env.EMAIL_PORT;
const host = process.env.EMAIL_HOST;
const user = process.env.EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASSWORD;

const from = user;
const to = user;

const transporter = nodemailer.createTransport({
    port,
    host,
    auth: {
        user,
        pass,
    },
    secure: true,
});

/* POST email */
router.post('/mailer/book', function (req, res) {
    const {body} = req;
    const {html} = body;

    const mailData = {
        subject: 'Заявка - наличие свободных дат',
        from,
        to,
        html,
    };

    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.log(err)
            res.send(500);
        } else {
            console.log(info);
            res.send(200);
        }
    });
});

router.post('/mailer/feedback', function (req, res) {
    const {body} = req;
    const {html} = body;

    const mailData = {
        subject: 'Заявка - возникли вопросы',
        from,
        to,
        html,
    };

    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.log(err)
            res.send(500);
        } else {
            console.log(info);
            res.send(200);
        }
    });
});

module.exports = router;
