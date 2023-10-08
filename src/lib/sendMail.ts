import nodemailer from "nodemailer";
import { env } from "$env/dynamic/private";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: env.EMAIL,
    pass: env.PSKTOKEN,
  },
  pool: true,
});

const sendMail = async (
  name: string,
  email: string,
  message: string,
  phone: string
) => {
  const listOfBannedWords = [
    "seo",
    "business",
    "website",
    "followers",
    "service",
    "offer",
    "offers",
    "click",
    "free",
    "growth",
  ];

  function checkBannedWords(
    listOfWords: string[],
    listOfBannedWords: string[]
  ) {
    for (const word of listOfBannedWords) {
      if (listOfWords.includes(word)) {
        return true;
      }
    }
    return false;
  }

  const listOfWords = message.split(/\W/).map((w) => w.toLocaleLowerCase());
  if (checkBannedWords(listOfWords, listOfBannedWords)) {
    return { error: true };
  }

  const mailOptions = {
    from: env.EMAIL,
    to: env.EMAIL,
    subject: `Mesaj-${name}-${email}`,
    text: message + "\n\nTelefon numarası: " + phone,
    replyTo: email,
  };

  const res = await transporter.sendMail(mailOptions);

  if (res.response.slice(0, 3) === "250") {
    return { success: true };
  } else {
    return { error: true };
  }
};

export default sendMail;
