require("dotenv").config();
const EventEmitter= require("events");
const myEvent = new EventEmitter();
const mailsvc = require("../services/mail.service")

const EventName = {
    REGISTER_EMAIL: "registerEmail"
}

myEvent.on(EventName.REGISTER_EMAIL, async (data) => {
    try{
        await mailsvc.mailSend({
            to: data.email, 
            sub: "Activate your account!",
            message: `
            Dear ${data.name}, <br/>
            <p>Your account has been successfully created. Please click the link below or copy paste the url to activate your account: </p>
            <a href="${process.env.FRONTEND_URL}/activate/${data.token}">
                ${process.env.FRONTEND_URL}/activate/${data.token}
            </a>
            <br/>
            <p><strong>Note: </strong>Please do not reply to this email</p>

            <p>Regards,</p>
            <p>System Administration,</p>
            <p>${process.env.SMTP_FROM}</p>
            `
        })
        console.log("Register email send event success....")
    } catch(exception) {
        // 
        console.log(exception)
        process.exit(1);
    }
})

module.exports= {myEvent, EventName};