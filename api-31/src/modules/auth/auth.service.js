const UserModel = require("../user/user.model")
const {uploadHelper, randomStringGenerator} = require("../../utilities/helpers")
const bcrypt = require("bcryptjs");


class AuthService {
    transaformRegsiterUser = async(req) => {
        const data = req.body   // parser
        if(req.file) {
            data.image = await uploadHelper(req.file.path, data.role);
        }
        data.password = bcrypt.hashSync(data.password, 10);     // encode
        data.activationToken = randomStringGenerator(100);
        data.activeFor = new Date(Date.now() + (60*60*3*1000))
        return data;
    }
    
    registerUser = async (data) => {
        try {
            const userObj = new UserModel(data)
            return await userObj.save()
        } catch(exception) {
            throw exception
        }
    }
}
const authSvc = new AuthService()
module.exports = authSvc;