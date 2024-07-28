const nodemailer = require("nodemailer")

class MailService {
    transport;

    constructor() {
        try {
            let connectionOps ={
                host: process.env.SMTP_HOST, 
                port:  process.env.SMTP_PORT, 
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
            console.log(connectionOps)
            this.transport = nodemailer.createTransport(connectionOps)
            console.log("Email Server connected successfully.")
        } catch(exception) {
            console.log("Error connecting email server... ", exception)
            throw {message: "Error connecting email Server", detail: exception, status: "SMTP_CONNECTION_ERROR"};
        }
    }

    // TODO: Define email send operation
    mailSend = async ({to, sub, message})=> {
        try{
            // 
            const response = await this.transport.sendMail({
                to: to,
                from: process.env.SMTP_FROM,
                // cc: "",
                // bcc: "", 
                // attachments: ["/Voumes/Data/codes/mern-31/api-31/public/uploads/user/1721272117260-205.svg"],
                subject: sub, 
                // text: "",
                // // <p>text</p>
                html: message
            })
            console.log(response)
            return ;
        } catch(exception) {
            //
            console.log(exception)
            throw {message: "Error sending email", detail: exception, status: "EMAIL_SENDING_ERROR"}
        }
    }
}

const mailsvc = new MailService()
module.exports = mailsvc