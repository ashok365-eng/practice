var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ashokmanikala414@gmail.com',
    pass: 'kumar@123'
  }
});

var mailOptions = {
  from: 'ashokmanikala414@gmail.com',
  to: '1435714357a@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'prameela is too intelligent!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});