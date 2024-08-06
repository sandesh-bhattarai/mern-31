const jwt = require("jsonwebtoken");
const authSvc = require("../modules/auth/auth.service");

const loginCheck = async (req, res, next) => {

    try {
        let token = null;

        if(req.headers['authorization']) {
            token = req.headers['authorization']
        } else if(req.query['token']){
            token = req.query['token'];
        }
        if(!token) {
            next({code: 401, message: "Unauthorized Access", status: "TOKEN_REQUIRED"})
        } else {
            // token 
            token = token.split(" ").pop();

            // verify 
            const data = jwt.verify(token, process.env.JWT_SECRET);
            if(data.type !=='access') {
                next({code: 403, message: "Token type not supported", status: "UNSUPPORTED_TOKEN"})
            } else {
                const user = await authSvc.getSingleUserByFilter({
                    _id: data.sub
                })
                req.authUser = {
                    _id: user._id, 
                    name: user.name, 
                    email: user.email, 
                    address: user.address,
                    phone: user.phone,
                    role: user.role,
                    status: user.status,
                    image: user.image
                }
                next();
            }
        }

    } catch(exception)  {
        console.log("Jwtexception", exception)
        next(exception);
    }
}

module.exports = {
    loginCheck
}