import nodemailer from "nodemailer";
import config from "../config";

// Create a test account or replace with real credentials.
const SendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: config.node_env == "production ", // true for 465, false for other ports
    auth: {
      user: config.smtp_auth_user,
      pass: config.smtp_auth_pass,
    },
  });

  await transporter.sendMail({
    from: config.smtp_auth_user,
    to: to,
    subject: "Change Your Password",
    text: "Reset Password", // plain‑text body
    html: html, // HTML body
  });
};

export default SendEmail;
// Wrap in an async IIFE so we can use await.
// (async () => {
//   const info = console.log("Message sent:", info.messageId);
// })();
