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

    getSingleUserByFilter  = async(filter) => {
        try {
            const user = await UserModel.findOne(filter);
            if(!user) {
                throw {code: 404, message: "User not found", status: "USER_NOT_FOUND" }
            } else  {
                return user;
            }
        } catch(exception) {
            throw exception
        }
    }


    updateUserById = async (id, data) => {
        try {
            const user = await UserModel.findByIdAndUpdate(id, {$set: data}, {new: true});
            return user;
        } catch(exception) {
            throw exception
        }
    }
}
const authSvc = new AuthService()
module.exports = authSvc;