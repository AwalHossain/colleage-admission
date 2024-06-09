
import nodemailer from 'nodemailer';


const sendMail = async (email:string,subject:string,text:string)=>{

    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.com",
      port: 465,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "awal.h0ssain@yandex.com",
        pass: "juno.probe1",
      },
    });
    
    const info = await transporter.sendMail({
      from: 'awal.h0ssain@yandex.com', // sender address
      to: `${email}`, // list of receivers
      subject: `${subject}`, // Subject line
      html: `${text}`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    
    return info;
  };

    export default sendMail;