const nodemailer = require("nodemailer");

/* Send Email  */
const Mailer = (password, email) => {
  const link = "http://localhost:3000";
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "elbouhmydyabdelmoughit@gmail.com",
      pass: "ecpyfthmfryhwqex",
    },
    secure: true,
  });

  let info = transporter.sendMail({
    from: "'ElbouhmydyAbdelmoughit'<elbouhmydyabdelmoughit@gmail.com>",
    to: email,
    subject: "Confirmation Password",
    text: `Hello this is your email: ${email} and this is password: ${password}`, 
    html: `<b>Hey this is email:${email} and this password:${password}  <a href=" ${link} ">Login</a></b>`,
  });
};

module.exports = Mailer