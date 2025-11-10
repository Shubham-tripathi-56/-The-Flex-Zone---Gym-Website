import { config } from "dotenv";
import nodeMailer from "nodemailer";

config({path:"./config.env"})
export const sendEmail = async(options) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,                  // SMTP MEAN :- Simple mail transfer protocol
        port: process.env.SMTP_PORT,
        service: process.env.SMTP_SERVICE,
        auth: {
          user: process.env.SMTP_MAIL,
          pass: process.env.SMTP_PASSWORD,
        },
      
    });
    const mailOptions = {
        from : process.env.SMTP_MAIL,
        to : options.email,
        subject: options.subject,
        text: ` User Name :${options.name} \n\nUser Message :${options.message}  \n\n Email Of User Who Sent The Message :${options.userEmail} `,
    }
    await transporter.sendMail(mailOptions);
};





