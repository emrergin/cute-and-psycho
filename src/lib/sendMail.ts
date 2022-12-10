import nodemailer from "nodemailer";
import { env } from '$env/dynamic/private';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com' ,
    port: 587,
    secure: false,
    auth: {
      user: env.EMAIL,
      pass: env.PSKTOKEN,
    },
    pool: true,
});

const sendMail =  async (name: string, email: string, message: string) => {

  const mailOptions = {
      from: env.EMAIL,
      to: env.EMAIL,
      subject: `Mesaj-${name}-${email}`,
      text: message, 
      replyTo:email     
  };


  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
    console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        // do something useful
      }
  });
}

export default sendMail;