const { fileDelete, uploadHelper } = require("../../utilities/helpers")
const bcrypt = require("bcryptjs");

class AuthController {
    register = async (req, res, next) => {
        try{
            // name, email, password, phone, addres, role
            const data = req.body   // parser
            // single imag e
            if(req.file) {
                data.image = await uploadHelper(req.file.path);
            }

            // bcrypt => user - createdtime, server, salt, hash func
            var salt = bcrypt.genSaltSync(10);
            data.password = bcrypt.hashSync(data.password, salt);     // encode
            data.salt = salt

            /// db operation 
            // activate link email 
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