const Joi = require("joi")

class AuthController {
    register = (req, res, next) => {
        // name, email, password, phone, addres, role
        const data = req.body   // parser
        
        const registerDTO = Joi.object({
            name: Joi.string().min(2).max(50).required(),
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/).required(),
            confirmPassword: Joi.string().equal(Joi.ref('password')).required(),
            phone: Joi.string(),
            address: Joi.string(),
            role: Joi.string().regex(/^(customer|seller)$/)
        });
            // 2 way 
            // sync 
            // async 
        const response = registerDTO.validate(data,{abortEarly: false})
        console.log(response);
        // valid => response =:> dataa 
        // invlaid => response => {error: [{}]}
        // success call 
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