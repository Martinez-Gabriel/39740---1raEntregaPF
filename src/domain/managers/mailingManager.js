import nodemailer from "nodemailer";

class MailingManager {
    constructor() {
        this.smtp_config = {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                 user: process.env.SMTP_EMAIL,
                 pass: process.env.SMTP_KEY,
            }
        };
    }

    async send() {
        const transport = nodemailer.createTransport(this.smtp_config);
        const mailOptions = {
            from: 'mart.gabriel96@gmail.com',
            to:'gabrielalejandromartinez96@gmail.com',
            subject: 'mailing test',
            html:   
                    `<div>
                        <h1>This is a mensage from mailing system!</h1>
                    </div>`,
            attachments: [],
        };
        await transport.sendMail(mailOptions);
    }
}

export default MailingManager;