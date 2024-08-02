const {myEvent, EventName} = require("../../middleware/events.middleware");
const { fileDelete,randomStringGenerator } = require("../../utilities/helpers")
const authSvc = require("./auth.service");

class AuthController {
    // 
    register = async (req, res, next) => {
        try{
            const data = await authSvc.transaformRegsiterUser(req);
            await authSvc.registerUser(data);
            myEvent.emit(EventName.REGISTER_EMAIL, {name: data.name, email: data.email, token: data.activationToken})

            res.json({
                result: data, 
                meta: null, 
                message: "Your account has been registered succesfully.",
                stauts: "REGISTER_SUCCESS"
            })
        } catch(exception) {
            // handling
            if(req.file) {
                fileDelete(req.file.path)
            }
            next(exception);
            
        }
    }

    getLoggedInUser =(req, res, next) => {
        // get loggedInUser's proifle
    }

    activateRegisteredUser =  async (req, res, next) => {
        try{
            const token = req.params.token;
            const userDetail = await authSvc.getSingleUserByFilter({
                activationToken: token
            }) 

            // verify expiry of token 
            let tokenExpiry = new Date(userDetail.activeFor);
            const today = new Date();

            if(tokenExpiry < today) {
                throw {code: 400, message: "Token expired", status: "ACTIVATION_TOKEN_EXPIRED"}
            }

        } catch(exception) {
            next(exception);
        }
    }


    resendToken = async(req, res, next) => {
        try {
            const token = req.params.token; 
            const userDetail = await authSvc.getSingleUserByFilter({
                activationToken: token
            })
            const activationToken = randomStringGenerator(100);
            const activeFor = new Date(Date.now() + (60*60*3*1000))

            // userobj => save()
            await authSvc.updateUserById(userDetail._id, {
                activationToken: activationToken,
                activeFor: activeFor
            })
            // notify 
            myEvent.emit(EventName.REGISTER_EMAIL, {name: userDetail.name, email: userDetail.email, token: activationToken})

            res.json({
                result: {
                    activationToken, 
                    activeFor
                },
                message: "An email has been delivered for reactivation token.",
                meta: null, 
                status: "ACTIVATION_TOKEN_RESEND_SUCCESS"
            })
        } catch(exception) {
            next(exception)
        }
    }

    login =  (req, res, next) => {
        // TASK: receive email and password as a body payload in json parse
        // validate if email or password is empty 
                 // return error from next({}) mentioning if email not provided or password not provided. 
         // if validation is passed 
             // return success with message to the client 
    }

    logout = (req, res, next)=> {

    }

    forgetPassword = (req, res, next) => {
        // logic 
            // email receive 
                // validation
                    // get user 
                        // reset-token 
                            // email send client 
                            // response to client
    }

    resetPassword =  (req, res, next) => {
        // password update 
    }
}

const authCtrl = new AuthController()
module.exports = authCtrl;