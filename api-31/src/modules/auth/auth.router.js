const authRouter = require("express").Router()
const authCtrl = require("./auth.controller");

const {bodyValidator} = require("../../middleware/validator.middleware")
const {registerDTO, loginDTO} = require("./auth.contract")


authRouter.post('/register',bodyValidator(registerDTO), authCtrl.register)

authRouter.get("/me", authCtrl.getLoggedInUser)
authRouter.get('/activate/:token', authCtrl.activateRegisteredUser);
authRouter.post('/login',bodyValidator(loginDTO), authCtrl.login)

authRouter.delete('/logout', authCtrl.logout)
authRouter.post('/forget-password', authCtrl.forgetPassword)
authRouter.patch("/reset-password/:token",)

module.exports = authRouter;