const { Status } = require("../../config/constants.config");
const {myEvent, EventName} = require("../../middleware/events.middleware");
const { fileDelete,randomStringGenerator } = require("../../utilities/helpers")
const authSvc = require("./auth.service");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");

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
        res.json({
            result: req.authUser, 
            meta: null, 
            message: "Logged In User Detail",
            status: "LOGGED_IN_USER"
        })
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

            const updateBody = {
                activationToken: null, 
                activeFor: null, 
                status: Status.ACTIVE
            }

            await authSvc.updateUserById(userDetail._id, updateBody)
            myEvent.emit(EventName.ACTIVATION_EMAIL, {name: userDetail.name, email: userDetail.email})
            res.json({
                result: null, 
                message: "Your account has been activated successfully. Please login to continue.",
                meta: null, 
                status: "ACCOUNT_ACTIVATION_SUCCESS"
            })
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

    login = async (req, res, next) => {
        try {
            const {email, password} = req.body;
            const user = await authSvc.getSingleUserByFilter({
                email: email
            })
            // exists 
            if(bcrypt.compareSync(password, user.password)) {
                // password 
                if(user.status !==  Status.ACTIVE) {
                    throw  {code: 403, message: "Your account has not been completely setup.", status: "USER_NOT_ACTIVE" }
                } else {
                    const accessToken = jwt.sign({
                        sub: user._id,
                        type: "access"
                    }, process.env.JWT_SECRET, {
                        expiresIn: "1 hour"
                    })

                    const refreshToken = jwt.sign({
                        sub: user._id,
                        type: "refresh"
                    }, process.env.JWT_SECRET, {
                        expiresIn: "1 day"
                    })
                    
                    res.json({
                        result: {
                            token: {
                                access: accessToken,
                                refresh: refreshToken
                            },
                            detail: {
                                _id: user._id, 
                                name: user.name,
                                email: user.email, 
                                role: user.role
                            }
                        },
                        message: "Welcome to "+user.role+" panel",
                        meta: null, 
                        status: "LOGIN_SUCCESS"
                    })

                }
            } else {
                throw  {code: 400, message: "Credential does not match", status: "CREDENTIAL_FAILED" }
            }
        } catch(exception) {
            next(exception)
        }
    }

    logout = (req, res, next)=> {

    }

    forgetPassword = (req, res, next) => {
        // logic 
            // email receive 
                // get user 
                    // reset-token 
                        // .. update db user , rnamdomString => resetToken , activeFor

                        // email send client 
                            // http://localhost:5173/activate/token 
                            // http://localhost:5173/reset-password/?token=rnadomstring
                        // response to client
    }

    resetPassword =  (req, res, next) => {
        // password update
        // token 
            // token user fetch 
                // user.password = bcryp.hashSync(req.body.password, 10) 
                    // await user.save()
                // res. success 
    }
}

const authCtrl = new AuthController()
module.exports = authCtrl;