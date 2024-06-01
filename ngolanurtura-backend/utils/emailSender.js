const nodemailer = require('nodemailer');
const config = require('../config/db');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.parsed.EMAIL_USER,
    pass: config.parsed.EMAIL_PASSWORD
  }
});

module.exports = {
  sendVerificationEmail: (email, token) => {
    const mailOptions = {
      from: config.parsed.EMAIL_USER,
      to: email,
      subject: 'Verificação de Conta Ngola Nurtura',
      html: `
        <h1>Verifique sua conta</h1>
        <p>Clique no link abaixo para verificar sua conta:</p>
        <a href="${config.parsed.FRONTEND_URL}/verify/${token}">Verificar Conta</a>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Erro ao enviar email de verificação:', error);
      } else {
        console.log('Email de verificação enviado:', info.response);
      }
    });
  }
};