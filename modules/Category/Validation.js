import Joi from 'joi'


export const createCategoryValidation = {
    body :Joi.object().required().keys({
        name: Joi.string().required().min(3).max(30),
        type: Joi.string().required().min(3).max(30),
        task: Joi.string().required().min(3).max(30),
        _id:Joi.string().min(4).max(100)
    })
}