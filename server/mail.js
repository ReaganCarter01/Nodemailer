const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const auth ={
    auth:{
        api_key:'d5b1f1f65a2d787c44205de663db2749-7005f37e-0cafac85',
        domain:'sandboxf06faac06b9d4ab68c810a6c61693ad6.mailgun.org'
    }
}
const transporter = nodemailer.createTransport(mailgun(auth));

const sendMail= (email,subject,text,cb)=> {
    const mailOptions = {
        from: email,
        to: 'reagancarter1@outlook.com',
        subject,
        text
    }

    transporter.sendMail(mailOptions,function(err,data){
        if(err){
           cb(err,null)
        }else{
            cb(null,data);
        }
    })
}
module.exports = sendMail;