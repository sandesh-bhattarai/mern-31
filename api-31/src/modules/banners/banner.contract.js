const Joi = require("joi");
const { Status } = require("../../config/constants.config");

const BannerCreateDTO = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    status: Joi.string().regex(/^(active|inactive)$/).default(Status.INACTIVE), 
    link: Joi.string().uri().default(null),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),     // TODO: enddate should be greater than startDate
    image: Joi.string().required()
})

module.exports = {
    BannerCreateDTO
};