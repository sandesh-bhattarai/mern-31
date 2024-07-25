const { fileDelete, uploadHelper, randomStringGenerator } = require("../../utilities/helpers")
const bcrypt = require("bcryptjs");

class AuthController {
    register = async (req, res, next) => {
        try{
            const data = req.body   // parser
            if(req.file) {
                data.image = await uploadHelper(req.file.path);
            }

            // bcrypt => user - createdtime, server, salt, hash func
            var salt = bcrypt.genSaltSync(10);
            data.password = bcrypt.hashSync(data.password, salt);     // encode
            data.salt = salt

            /// db operation 
            // const otp = Math.ceil(Math.random() * 999)       // 0-1
            // activate link email 
            data.activationToken = randomStringGenerator(100);
            data.tokenExpires = new Date(Date.now() + (60*60*3*1000))

            // email smtp => sending domain 
            // real email => SD verification 
            // fake smtp 

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
            console.log("I am here ",exception)
        }
    }

    getLoggedInUser =(req, res, next) => {
        // get loggedInUser's proifle
    }

    activateRegisteredUser =  (req, res, next) => {

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