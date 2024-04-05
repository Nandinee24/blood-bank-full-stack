const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    // connect with the smtp
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'mariam.wyman67@ethereal.email',
            pass: '2Y4tBnMJyDuGkUbVyM'
        }
    });

    let info = await transporter.sendMail({
        from: '"Nandinee Vekariya 👻" <mariam.wyman67@ethereal.email>', // sender address
        to: "21se02cs075@ppsu.ac.in", // list of receivers
        subject: "test mail", // Subject line
        text: "it is test mail from blood bank managenet system", // plain text body
        html: "<h1><b>it is test mail from blood bank managenet system</b></h1>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.json(info);
};

module.exports = sendMail;