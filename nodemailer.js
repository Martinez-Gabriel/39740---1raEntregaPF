// import dotenv from 'dotenv';
// import express from 'express';
// import nodemailer from 'nodemailer';

// const app = express();
// dotenv.config();

// const transport = nodemailer.createTransport ({
//     service: 'gmail',
//     port: 587,
//     auth: {
//         user: process.env.SMTP_EMAIL,
//         pass: process.env.SMTP_KEY,
//     },
// });

// const mail = {
//     from: 'mart.gabriel96@gmail.com',
//     to:'gabrielalejandromartinez96@gmail.com',
//     subject: 'Mail de prueba',
//     html:   
//             `<div>
//                 <h1>Hola Gabriel!</h1>
//             </div>`,
//     attachments: [],
// };

// app.get('/mail', async (req, res) => {
//     await transport.sendMail(mail)

//     res.send('Mail enviado');
// });


