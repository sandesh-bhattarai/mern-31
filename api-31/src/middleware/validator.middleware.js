const bodyValidator = (schema) => {
    return async (req, res, next) => {
        try{
            const data = req.body;
            const response = await schema.validateAsync(data, {abortEarly: false})
            next();
        } catch(exception) {
            let errors = {};
            exception.details.map((value, index) => {
                errors[value.context.key] = value.message
            })
            next({code: 400, detail: errors, message: "Validation failed", status: "VALIDATION_FAILED"})
        }
    }
}

module.exports = {bodyValidator};