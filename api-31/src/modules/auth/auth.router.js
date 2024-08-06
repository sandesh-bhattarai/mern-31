const authRouter = require("express").Router()
const authCtrl = require("./auth.controller");

const {bodyValidator} = require("../../middleware/validator.middleware")
const {registerDTO, loginDTO} = require("./auth.contract")

// config uploader  => file upload 
const {setPath, uploader}  = require("../../middleware/uploader.middleware");
const { loginCheck } = require("../../middleware/auth.middleware");



authRouter.post('/register', setPath('user/'), uploader.single('image'),  bodyValidator(registerDTO, '/images/user/'), authCtrl.register)
authRouter.get('/activate/:token', authCtrl.activateRegisteredUser);
authRouter.get('/re-send/activation/:token', authCtrl.resendToken)

authRouter.post('/login',bodyValidator(loginDTO), authCtrl.login)

authRouter.get("/me",loginCheck,  authCtrl.getLoggedInUser)




authRouter.delete('/logout',loginCheck, authCtrl.logout)

// receive email from user
authRouter.post('/forget-password', authCtrl.forgetPassword)

// token url, body=> password, confirmPassword
authRouter.patch("/reset-password/:token",)

module.exports = authRouter;