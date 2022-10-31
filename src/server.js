const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const bodyparser = require("body-parser");
require("dotenv").config();
let creds = require("./credentials");


const app = express();
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

app.route("/contactus").get(function (req, res) {
  res.sendFile(process.cwd() + "/public/contactus.html");
});


app.route("/contactus").post(function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let comment = req.body.comment;


  let emailBody = `
  Name: ${name}
  Email: ${email}
  Phone: ${phone}
  Comment: ${comment}
  `;
  let subject = 'New contact request';
  let emailFrom = email;
  transporter.sendMail({from: emailFrom, replyTo: email, sender: email, subject: subject, to:'micklito.dev@gmail.com', text: emailBody});

  res.redirect("thankyou.html");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

const transporter = nodemailer.createTransport({
  host: "smtp.google.com", 
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
});


transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});