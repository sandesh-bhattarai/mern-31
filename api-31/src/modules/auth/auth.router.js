const authRouter = require("express").Router()


// endpoint api 
    // private, open
// regsiter 
// /auth/......
// authRouter.use((req, res, next) => {
//     console.log("I am always called")
//     // req ===> register 
//     req.newrequest = "I am new "
//     next();
// })

// authRouter.use((req, res,next) => {
//     console.log("I am another middleware")
//     res.json()
//     // next()
// })

// parser
    // json, urlencoded, multipart 
// filupload 
    // fileupload 
// validation 
    // validation 

// authRouter.use(express.json());
const validator = (req, res, next) => {
    // plugin based 
    // valid
        next()
    // invalid
        // res.statu(400/422).json() 
}
// regsitrion
authRouter.post('/register', (req, res, next) => {
    const data = req.body   // parsers
    if(!data.email) {
        res.status(400).json({
            result: {
                email: "Email is required"
            },
            message: "Validation Failed",
            meta: null, 
            status: "REGISTRATION_FAILED"
        })
    }
    // TODO: Control def
        // user => token => random string 100 
            // email sent link 
    const output = {}
    
    res.json({
        result: output,
        message: "Your account has been created successfully. Please check email for further processing.",
        meta: null,
        status: "REGISTER_SUCCESS"
    })
})


authRouter.get("/me", (req, res, next) => {
    // get loggedInUser's proifle
})

// activate 
// /activate/rnadomstring
authRouter.get('/activate/:token', (req, res, next) => {

});

// login 
// auth/login 
authRouter.post('/login', (req, res, next) => {

})

// logout
// auth/logout
authRouter.delete('/logout', (req, rex)=> {

})

// forget-password
authRouter.post('/forget-password', (req, res, next) => {

})

// reset-password
authRouter.patch("/reset-password/:token", (req, res, next) => {
    // password update 
})

module.exports = authRouter;