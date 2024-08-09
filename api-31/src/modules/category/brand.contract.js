const Joi = require("joi");
const { Status } = require("../../config/constants.config");

const BrandCreateDTO = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    status: Joi.string().regex(/^(active|inactive)$/).default(Status.INACTIVE), 
    image: Joi.string().required()
})

const BrandUpdateDTO = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    status: Joi.string().regex(/^(active|inactive)$/).default(Status.INACTIVE), 
    image: Joi.string().empty(null, "").optional()
})

module.exports = {
    BrandCreateDTO,
    BrandUpdateDTO
};