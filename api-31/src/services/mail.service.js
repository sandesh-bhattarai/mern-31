const nodemailer = require("nodemailer")

class MailService {
    transport;

    constructor() {
        try {
            let connectionOps ={
                host: process.env.SMTP_HOST, 
                port:  process.env.SMTP_POST, 
                auth: {
                    user:  process.env.SMTP_USER, 
                    pass:  process.env.SMTP_PASSWORD
                }
            }
            if(process.env.SMTP_PROVIDER === 'gmail') {
                connectionOps = {
                    ...connectionOps, 
                    service: 'gmail'
                }
            }
            this.transport = nodemailer.createTransport(connectionOps)
            console.log("Email Server connected successfully.")
        } catch(exception) {
            console.log("Error connecting email server... ", exception)
            throw exception;
        }
    }

    // TODO: Define email send operation
    mailSend = ({to, sub, message})=> {
        try{
            // 
        } catch(exception) {
            //
        }
    }
}

const mailsvc = new MailService()
module.exports = mailsvc