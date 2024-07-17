const Joi = require("joi")
const emailSchema = Joi.string().email().required();

const registerDTO = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: emailSchema,
    password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%#*?&])[A-Za-z\d@$!%#*?&]{8,15}$/).required(),
    confirmPassword: Joi.string().equal(Joi.ref('password')).required().messages({
        "any.only": "Password and confirm Passwrod does not match"
    }),
    phone: Joi.string(),
    address: Joi.string(),
    role: Joi.string().regex(/^(customer|seller)$/)
});


const loginDTO = Joi.object({
    email: emailSchema,
    password: Joi.string().required()
})

module.exports = {
    registerDTO, 
    loginDTO
}