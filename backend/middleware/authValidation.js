import joi from 'joi';

export const signupValidation = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(30).required(),
        email: joi.string().email().required(),
        password: joi.string().min(3).max(30).required()
    })

    const { error } = schema.validate(req.body);
    if(error){
        return res.status(400).send({
            message: error.details[0].message
        })
    }
    next();
};

export const loginValidation = (req, res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(3).max(30).required()
    })

    const { error } = schema.validate(req.body);
    if(error){
        return res.status(400).send({
            message: error.details[0].message
        })
    }
    next();
};