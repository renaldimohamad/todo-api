import Joi from "joi"

export const createPostSchema = Joi.object({
   content: Joi.string().min(3).max(100).required(),
}).unknown(true)
