const Joi = require("joi");
const { Status } = require("../../config/constants.config");

const BrandCreateDTO = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    description: Joi.string().empty(null, "").optional(),
    status: Joi.string().regex(/^(active|inactive)$/).default(Status.INACTIVE), 
    image: Joi.string().required()
})

const BrandUpdateDTO = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    status: Joi.string().regex(/^(active|inactive)$/).default(Status.INACTIVE), 
    description: Joi.string().empty(null, "").optional(),
    image: Joi.string().empty(null, "").optional()
})

module.exports = {
    BrandCreateDTO,
    BrandUpdateDTO
};