const authRouter = require("express").Router()
const authCtrl = require("./auth.controller");

authRouter.post('/register', authCtrl.register)
authRouter.get("/me", authCtrl.getLoggedInUser)
authRouter.get('/activate/:token', authCtrl.activateRegisteredUser);
authRouter.post('/login', authCtrl.login)
authRouter.delete('/logout', authCtrl.logout)
authRouter.post('/forget-password', authCtrl.forgetPassword)
authRouter.patch("/reset-password/:token",)

module.exports = authRouter;