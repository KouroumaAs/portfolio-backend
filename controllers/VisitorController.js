const { SendEmailValidation } = require("../Rules/SendMessageRules");
const { MessagesVisitor } = require("../helpers/MessagesContent");
var nodemailer = require('nodemailer');
const SendMessageController = async ( req, res ) => {
    const validations =  await SendEmailValidation( req, res );
    if( validations.status === 200 ){
        const body = req.body;
        var mailOptions = {
            from: body.email,
            to: process.env.EMAIL_SENDER,
            subject: 'Contact à partir de mon portfolio',
            html: MessagesVisitor(body)
        }
       
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            logger: true,
            debug: true,
            auth:{
            user: process.env.EMAIL_SENDER,
            pass: process.env.PASSWORD
            }
          
          });
       const info = await transporter.sendMail(mailOptions);
       console.log(info.messageId)
    }
       
    res.send(validations);
}
async function sendEmail (options){
   try{

   }
   catch(error){
     console.log(error);
   }
}
module.exports = { SendMessageController }