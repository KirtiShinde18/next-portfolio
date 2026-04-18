const nodemailer = require("nodemailer")
exports.sendEmail = ({ email, subject, message }) => new Promise(async (resolve, reject) => {
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASS }
        })
        await transport.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            html: message
        })
        resolve("Email sent successfully 💌 ")

    } catch (error) {
        console.log(error)
        reject("unable to send email")
    }
})